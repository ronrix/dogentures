import React from "react";
import { SERVER_PATH } from "../../../config/index.js";

export const SearchResults = ({ searchResults }) => {
    return (
        <div className="mt-4">
            <p>"known dogs"</p>
            {searchResults?.map((result, idx) => {
                return (
                    <div key={idx} className="my-2 flex flex-col justify-center hover:bg-lg transition cursor-pointer">
                        <div className="flex items-center hover:bg-g p-2 transition">
                            <div className="sm:w-8 sm:h-8 md:w-16 md:h-16 rounded-full overflow-hidden">
                                <img
                                    src={`${SERVER_PATH}images/profile/${result.name}/${result.avatar}`}
                                    className="rounded-full"
                                />
                            </div>
                            <span className="ml-4 font-bold sm:text-md md:text-lg">
                                {result.name}
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};