import React from "react";

export const MobileMsgs = ({ setIsMsgsShown, isMsgsShown }) => {
    return (
        <div
            className="sm:w-10 sm:h-10 md:w-16 md:h-16 rounded-full bg-d sm:visible lg:invisible absolute left-8 sm:bottom-24 md:bottom-16 z-20 flex justify-center items-center text-center hover:opacity-75"
            onClick={() => setIsMsgsShown(!isMsgsShown)}
        >
            <i className="fas fa-bars text-l sm:text-xl md:text-2xl"></i>
        </div>
    );
};
