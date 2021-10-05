import React, { useState } from "react";

import { AddNewPost } from "./Add Post/index.jsx";

export const TopBar = () => {
    const [isNewPostFieldShow, setIsNewPostFieldShow] = useState(false);

    return (
        <div className="flex flex-col justify-between mb-4">
            <div className="flex justify-between">
                <div className="flex items-center bg-ld rounded-full p-2 text-l">
                    <i className="fa fa-search text-g"></i>
                    <input
                        type="text"
                        placeholder="search"
                        className="bg-transparent pl-2 outline-none text-white placeholder-l w-96 tracking-wide"
                    />
                </div>
                <button
                    onClick={() => setIsNewPostFieldShow(true)}
                    className="flex items-center justify-center p-2 rounded-xl text-l font-bold bg-ld hover:opacity-50"
                >
                    <i className="fa fa-plus-circle pr-1"></i>
                    <span>add photo</span>
                </button>
            </div>
            <AddNewPost
                isOpen={isNewPostFieldShow}
                setIsNewPostFieldShow={setIsNewPostFieldShow}
            />
        </div>
    );
};
