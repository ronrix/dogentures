import React, {useState} from "react";
import { SERVER_PATH } from "../../../config/index.js";

export const SearchResults = ({ searchResults }) => {
    const [imgErr, setImgErr] = useState(false);

    function handleImg(e) {
        console.log("img not valid");
        setImgErr(true);
    }
    console.log(imgErr);

    return (
        <div className="mt-4">
            <p>"known dogs"</p>
            {searchResults?.map((result, idx) => {
                console.log(result);
                return (
                    <div key={idx} className="my-2 flex flex-col justify-center hover:bg-lg transition cursor-pointer">
                        <div className="flex items-center hover:bg-g p-2 transition">
                            <div className="sm:w-8 sm:h-8 md:w-16 md:h-16 rounded-full overflow-hidden flex items-center justify-center">
                                { !imgErr ? (
                                <img
                                    src={`${SERVER_PATH}images/profile/${result.name}/${result.avatar}`}
                                    className="rounded-full"
                                    onError={handleImg}
                                />) : <i className="fas fa-user-circle sm:text-3xl md:text-5xl text-d"></i>
                                }
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
