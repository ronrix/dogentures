import React from "react";
import { SERVER_PATH } from "../../../config/index.js";

export const UserPosts = ({ posts, data }) => {
    return (
        <div>
            <div className="text-md text-d font-bold">posts</div>

            {/* posts */}
            {posts ? (
                posts?.getAllPostsByUserId.map((post, idx) => {
                    return (
                        <div key={idx} className="flex relative flex-wrap">
                            <div className="relative w-full shadow-lg">
                                {data ? (
                                    <img
                                        src={`${SERVER_PATH}images/posts/${data?.getInfo?.name}/${post?.image}`}
                                        alt="avatar"
                                        className="m-2 w-full"
                                    />
                                ) : (
                                    <span>data is null</span>
                                )}
                                <div className="flex justify-between items-center">
                                    <p className="p-2 text-lg">
                                        {post?.description}
                                    </p>
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
                    );
                })
            ) : (
                <div>no post</div>
            )}
        </div>
    );
};
