import React from "react";
import { SERVER_PATH } from "../../../config/index.js";

export const TopInfo = ({ data }) => {
    return (
        <div className="flex items-center justify-between mb-4">
            <div>
                <h2 className="font-bold text-2xl text-d">
                    {data?.getInfo?.name}
                </h2>
                <span className="text-md">@{data?.getInfo?.name}</span>

                <p className="p-4 font-medium text-lg">this is the bio stuff</p>
            </div>
            <div className="sm:w-20 sm:h-20 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg">
                <img
                    src={`${SERVER_PATH}images/profile/${data?.getInfo.name}/${data?.getInfo.avatar}`}
                    alt="avatar"
                    className="rounded-full"
                />
            </div>
        </div>
    );
};
