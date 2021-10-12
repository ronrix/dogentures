import React, {useState} from "react";

import { gql, useQuery } from "@apollo/client";
import { TopInfo } from "./TopInfo";
import {UserPosts} from './Posts';

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
            bioDesc
            posts
        }
    }
`;

export const Posts = () => {
    const [token] = useState(() =>
        localStorage.getItem("token")
    );

    const { data: posts } = useQuery(GET_ALL_POSTS_BY_USERID, {
        context: { headers: { authorization: `Bearer ${token}` } },
    });
    const { data } = useQuery(GET_INFO, {
        context: { headers: { authorization: `Bearer ${token}` } },
    }); 

    return (
        <div className="sm:pl-2 md:pl-32 lg:pl-96 w-full h-screen">
            <div className="sm:px-4 py-12 md:pl-20 ">
                {/* user info */}
                <TopInfo data={data} />
                <hr className="pb-6" />
                <UserPosts data={data} posts={posts} />
            </div>
        </div>
    );
};
