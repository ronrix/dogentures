import React, { useState } from "react";

export const Settings = () => {
    const [settingsPage, setSettingsPage] = useState("personal");
    const [status, setStatus] = useState(true);

    const [isClickMenu, setIsClickMenu] = useState(false);

    function handleStatus() {
        setStatus(!status);
    }

    function handleSettingsPage(e) {
        if(e.target.id === 'personal') {
            setSettingsPage('personal');
        } else {
            setSettingsPage('status');
        }

    }

    return (
        <div className="sm:pl-2 md:pl-20 lg:pl-96 w-full bg-light-gray h-screen">
            <div className="sm:px-8 md:px-16 pt-7 h-full relative overflow-hidden">
                <div className="">
                    <h1 className="font-bold sm:text-lg md:text-2xl">Settings</h1>
                </div>

                <div
                    onClick={() => setIsClickMenu(!isClickMenu)}
                    className="text-center sm:block md:hidden h-10 w-10 rounded-xl bg-d right-10 top-10 my-2 mr-2 flex">
                    <i className={`fas fa-chevron-${isClickMenu ? 'left' : 'right'} text-l text-xl text-center mt-2`}></i>
                </div>

                <div className="flex h-full mt-4 overflow-x-hidden ">
                    <div 
                        className={`border overflow-hidden md:border-none md:w-48 transform ${isClickMenu ? 'max-sm:max-w-full': 'sm:w-0 p-0'} sm:bg-l sm:rounded-lg flex-col md:p-4 mr-4 transition `}>
                        <p 
                            id="personal"
                            onClick={(e) => handleSettingsPage(e)}
                            className={`${settingsPage === 'personal' ? 'md:bg-g': 'text-g' } hover:text-d mb-4 rounded-lg sm:p-2 md:p-4 cursor-pointer font-bold sm:text-sm md:text-lg transition `}
                        >
                            personal info
                        </p>
                        <p 
                            id="status" 
                            onClick={(e) => handleSettingsPage(e)} 
                            className={`${settingsPage === 'status' ? 'text-d md:bg-g': 'text-g' } rounded-lg p-4 cursor-pointer hover:text-d font-bold sm:text-sm md:text-lg transition`}
                        >
                            status
                        </p>
                    </div>
                    {/* menu burger mobile */}
                    <div className="flex-1 self-start">
                        { settingsPage === 'personal' ? (
                            <div className="bg-white p-4 rounded-lg">
                                <h1 className="font-bold sm:text-sm md:text-2xl">Personal Info</h1>
                                <div className="flex w-full">
                                    <div></div>
                                </div>
                            </div> ) 
                            : ( 
                                <div className="bg-white p-4 rounded-lg">
                                    <h1 className="font-bold sm:text-sm md:text-2xl">Status</h1>
                                    <div className="m-4 md:px-8 flex sm:justify-between md:justify-around items-center">
                                        <p className="font-bold">status</p>
                                        <div onClick={handleStatus} className={`${status ? 'bg-facebook' : 'bg-d' } sm:w-8 sm:h-4 md:w-12 md:h-8 rounded-2xl relative transition cursor-pointer`}>
                                            <div className={`sm:-top-1 md:top-0 rounded-full sm:w-6 sm:h-6 md:w-8 md:h-8 bg-light-gray absolute transform ${status ? '-translate-x-2' : 'sm:translate-x-4 md:translate-x-6'} transition`}></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
