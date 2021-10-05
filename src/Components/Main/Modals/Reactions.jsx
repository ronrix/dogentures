import React, { useState } from "react";

export const Reactions = () => {
    const [{ like, heart }, setIsReacted] = useState({
        like: false,
        heart: false,
    });
    const handleClickReaction = (e) => {
        console.log(e.target.id);
        if (e.target.id === "like") setIsReacted({ like: !like, heart: false });

        if (e.target.id === "heart")
            setIsReacted({ heart: !heart, like: false });
    };

    return (
        <div className="border-t-2 border-b-2 border-gray-400 flex">
            <i
                id="like"
                onClick={(e) => handleClickReaction(e)}
                className={`fas fa-thumbs-up ${
                    like ? "text-blue-500" : "text-gray-500"
                }  text-xl cursor-pointer hover:text-blue-500 flex flex-col items-center`}
            >
                <span className="text-xs text-gray-500 ">like</span>
            </i>
            <i
                id="heart"
                onClick={(e) => handleClickReaction(e)}
                className={`fas fa-heart ${
                    heart ? "text-red-400" : "text-gray-500"
                }  text-xl cursor-pointer hover:text-red-500 mx-2 flex flex-col items-center `}
            >
                <span className="text-xs text-gray-500 ">heart</span>
            </i>
        </div>
    );
};
