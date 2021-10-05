import React from "react";

import dogie from '../../../assets/dog-01.jpeg';
import {gql, useQuery} from '@apollo/client';

import {SERVER_PATH} from '../../../config/index.js';

const GET_ALL_POSTS_BY_USERID = gql`
    query GetAllPosts {
        getAllPostsByUserId {
            id
            hearts
            description
            image
            userId
        }
    }
`;

const GET_INFO = gql`
    query GetInfo {
        getInfo {
            avatar
            name
            posts
        }
    }
`;

export const Posts = () => {
//
    const {data: posts} = useQuery(GET_ALL_POSTS_BY_USERID);
    const {data} = useQuery(GET_INFO);

    return (
        <div className="sm:pl-20 md:pl-32 lg:pl-96 w-full bg-gray-600 h-screen">
            <div className="p-12 pl-20 ">
                {/* user info */}
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h2 className="font-bold text-2xl text-d">{data?.getInfo?.name}</h2>
                        <span className="text-md">@{data?.getInfo?.name}</span>

                        <p className="p-4 font-medium text-lg">this is the bio stuff</p>
                    </div>
                    <div className="w-32 rounded-full h-32 overflow-hidden shadow-lg">
                        <img 
                            src={`${SERVER_PATH}images/profile/${data?.getInfo.name}/${data?.getInfo.avatar}`} 
                            alt="avatar"
                            className="rounded-full" 
                        />
                    </div>
                </div>
                <hr className="pb-6" />
                <div>
                    <div className="text-md text-d font-bold">posts</div>
                         
                    {/* posts */}
                    {posts ? posts?.getAllPostsByUserId.map((post) => {
                        return (
                            <div className="flex relative flex-wrap">
                                <div className="relative w-full shadow-lg">
                                    { data ? 
                                        <img src={`${SERVER_PATH}images/posts/${data?.getInfo?.name}/${post?.image}`} alt="avatar" className="m-2 w-full" />
                                        : <span>data is null</span>
                                    }
                                    <div className="flex justify-between items-center">
                                        <p className="p-2 text-lg">{post?.description}</p>
                                        <div className="flex items-center">
                                            <span>{post?.hearts}</span>
                                            <i
                                                id="heart"
                                                className={`fas fa-heart text-4xl cursor-pointer text-r mx-2`}
                                            ></i>
                                        </div>
                                  </div>
                              </div>
                            </div>
                        )
                    }): <div>no post</div>}
                </div>
            </div>
        </div>
    );
};
