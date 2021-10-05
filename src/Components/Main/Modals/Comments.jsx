import React from "react";

export const Comments = () => {
    return (
        <>
            <div className="mt-2">comments</div>
            <div className="scrollbar-hide h-56 w-full overflow-y-scroll overflow-auto">
                <div className="bg-gray-200 p-2 rounded-md mb-2">
                    <div className="text-xs">Monday, Aug 31, 2021</div>
                    <span className="text-sm text-black font-bold">
                        Sample Name
                    </span>
                    <p className="text-xs text-black">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Omnis, excepturi!
                    </p>
                </div>
            </div>
        </>
    );
};
