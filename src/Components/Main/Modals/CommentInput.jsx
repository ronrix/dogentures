import React from "react";

export const CommentInput = ({ focusRef }) => {
    return (
        <div className="w-full mt-2 flex absolute bottom-0 justify-center right-0 bg-white p-2">
            <input
                ref={focusRef}
                type="text"
                className="bg-gray-200 w-full p-2 rounded-lg outline-none focus:ring focus:ring-gray-400"
                placeholder="write a comment"
            />
            <button className="bg-blue-500 p-2 ml-2 rounded-lg text-white flex items-center outline-none hover:bg-opacity-70">
                <i className="fas fa-share pr-2"></i>
                <span>ok</span>
            </button>
        </div>
    );
};
