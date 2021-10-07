import React from "react";
import sample from "../../../assets/default-prof-1.webp";

export const MsgBox = () => {
    return (
        <div className="ml-4 relative w-full h-screen overflow-hidden">
            <div className="flex justify-between items-center box-shadow">
                <div>
                    <span className="sm:text-lg md:text-2xl font-bold mr-2">the name</span>
                    <span className="sm:text-xs md:text-sm">online</span>
                </div>
                <img src={sample} className="rounded-full sm:w-14 md:w-24" />
            </div>

            <div className="bg-light-gray w-full h-4/5 mt-4 p-4 rounded-lg flex flex-col justify-between overflow-auto">
                <div className="flex flex-col">
                    <div className="rounded-lg p-2 my-2 flex items-center self-start">
                        <img src={sample} className="sm:w-6 md:w-10 rounded-full" />
                        <p className="bg-l p-2 rounded-lg ml-2 sm:text-xs md:text-sm">
                            hello fuck you
                        </p>
                    </div>

                    <div className="rounded-lg p-2 my-2 flex items-center self-end">
                        <img src={sample} className="sm:w-6 md:w-10 rounded-full" />
                        <p className="bg-facebook p-2 rounded-lg ml-2 sm:text-xs md:text-sm text-l">
                            hello ronrix
                        </p>
                    </div>

                    <div className="rounded-lg p-2 my-2 flex items-center self-start">
                        <img src={sample} className="sm:w-6 md:w-10 rounded-full" />
                        <p className="bg-l p-2 rounded-lg ml-2 sm:text-xs md:text-sm">
                            hello world
                        </p>
                    </div>

                </div>
                <div className="flex">
                    <input
                        type="text"
                        className="sm:w-10 md:w-full p-2 flex-1 bg-lg border-none outline-none rounded-md focus:sm:w-full break-words"
                        placeholder="write a message"
                    />
                    <button className="transform bg-lbtn text-l rounded-lg p-2 font-bold text-md ml-2 hover:opacity-75 transition">
                        send
                    </button>
                </div>
            </div>
        </div>
    );
};
