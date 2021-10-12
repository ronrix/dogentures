import React from "react";
import sample from "../../../assets/default-prof-1.webp";
import {SERVER_PATH} from '../../../config/index.js';

export const Msgs = ({ isMsgsShown, data, setIsClickedMsg, info }) => {

    const me = info?.getInfo?.name;

    return (
        <div
            className={`bg-white rounded-md sm:z-10 shadow-2xl sm:absolute lg:relative sm:transform ${
                isMsgsShown ? "sm:translate-y-0" : "sm:translate-y-full"
            } lg:translate-y-0 sm:w-52 md:w-96 p-4 h-screen overflow-auto relative transition`}
        >
            <input
                type="text"
                placeholder="search"
                className="w-full rounded-full p-2 border-none outline-none bg-light-gray"
            />
            <div className="mt-2 font-md">messages</div>

            <div className="">
                {/* message box */}
                {data && data?.getFilteredMsgsByUserId?.map((msg, idx) => {

                    return (
                        <div onClick={() => setIsClickedMsg(msg.id)} key={idx} className="bg-l p-2 rounded-lg mt-2 hover:bg-white cursor-pointer transition">
                            <div className="flex font-bold items-center mb-2">
                               <div className="sm:w-8 sm:h-8 md:w-12 md:h-12 rounded-full overflow-hidden shadow-lg flex items-center justify-center mr-2">
                                    <img 
                                        src={`${SERVER_PATH}images/profile/${me === msg?.receiver?.name ? msg?.sender?.name : msg?.receiver?.name}/${me === msg?.receiver?.name ? msg?.sender?.avatar: msg?.receiver?.avatar}`} 
                                        className="w-12 rounded-full mr-2"
                                    />
                                </div>
                                <span>{msg?.receiver?.name}</span>
                            </div>
                            <div className="text-sm flex h-5 overflow-hidden">
                                <span className="font-bold mr-2">{msg?.receiver?.name}:</span>
                                <p>{msg?.message[msg?.message.length - 1].msg}</p>
                            </div>
                        </div>
                    );

                })}
            </div>

        </div>
    );
};
