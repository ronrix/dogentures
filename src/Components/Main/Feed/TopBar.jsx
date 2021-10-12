import React from "react";

import { AddNewPost } from "./Add Post/index.jsx";

export const TopBar = ({setIsNewPostFieldShow, isNewPostFieldShow}) => {
    return (
        <div className="flex flex-col justify-between mb-4 relative">
            <div className="flex justify-between lg:w-full overflow-hidden">
                <div className="flex items-center bg-ld rounded-full p-2 text-l sm:p-0">
                    <i className="fa fa-search text-g ml-2"></i>
                    <input
                        type="text"
                        placeholder="search"
                        className="bg-transparent pl-2 outline-none text-white placeholder-l lg:w-96 sm:w-full tracking-wide"
                    />
                </div>
                <button
                    onClick={() => setIsNewPostFieldShow(true)}
                    className="flex items-center justify-center md:p-2 rounded-xl text-l font-bold bg-gradient-to-r from-d to-g hover:opacity-50 sm:text-sm sm:rounded-md lg:text-lg"
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
