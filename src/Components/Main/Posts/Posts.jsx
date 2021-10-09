import React, {useState} from "react";
import { SERVER_PATH } from "../../../config/index.js";

export const UserPosts = ({ posts, data }) => {
    const [isImgErr, setIsImgErr] = useState(false);
    return (
        <div>
            <div className="text-md text-d font-bold">posts</div>

            {/* posts */}
            <div className="flex">
            {posts ? (
                posts?.getAllPostsByUserId.map((post, idx) => {
                    return (
                        <div key={idx} className="flex relative flex-wrap m-2">
                            <div className="relative ">
                                {data && !isImgErr ? (
                                    <img
                                        src={`${SERVER_PATH}images/posts/${data?.getInfo?.name}/${post?.image}`}
                                        alt="avatar"
                                        className=" w-full shadow-lg"
                                        onError={() => setIsImgErr(true)}
                                    />
                                ) : (
                                    <span>data is null</span>
                                )}
                            </div>
                        </div>
                    );
                })
            ) : (
                <div>no post</div>
            )}
            </div>
        </div>
    );
};
