import React from "react";
import sample from "../../../assets/default-prof-1.webp";

export const Msgs = ({ isMsgsShown }) => {
    return (
        <div
            className={`sm:z-10 shadow-2xl sm:absolute lg:relative sm:transform ${
                isMsgsShown ? "sm:translate-y-0" : "sm:translate-y-full"
            } lg:translate-y-0 sm:w-52 md:w-96 bg-light-gray p-4 h-screen rounded-md overflow-auto relative transition`}
        >
            <input
                type="text"
                placeholder="search"
                className="w-full rounded-full p-2 border-none outline-none"
            />
            <div className="mt-2 font-md">messages</div>

            <div className="">
                {/* message box */}
                <div className="bg-l p-2 rounded-lg mt-2 hover:bg-white cursor-pointer transition">
                    <div className="flex font-bold items-center mb-2">
                        <img src={sample} className="w-12 rounded-full mr-2" />
                        <span>the name</span>
                    </div>
                    <div className="text-sm flex h-5 overflow-hidden">
                        <span className="font-bold mr-2">name:</span>
                        <p>the long text long text long text text hello</p>
                    </div>
                </div>
            </div>

        </div>
    );
};
