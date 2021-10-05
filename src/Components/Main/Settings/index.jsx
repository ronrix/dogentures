import React, { useState } from "react";

export const Settings = () => {
    const [settingsPage, setSettingsPage] = useState("personal");
    const [status, setStatus] = useState(true);

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
        <div className="pl-96 w-full bg-gray-600 h-screen overflow-hidden ">
            <div className="pl-16 pr-14 pt-7 h-full">
                <div className="">
                    <h1 className="font-bold text-2xl">Settings</h1>
                </div>
                <div className="flex h-full mt-4">
                    <div className="w-56 flex flex-col p-4 mr-4">
                        <p 
                            id="personal"
                            onClick={(e) => handleSettingsPage(e)}
                            className={`${settingsPage === 'personal' ? 'bg-g': 'text-g' } hover:text-d mb-4 rounded-lg p-4 cursor-pointer font-bold text-lg transition `}
                        >
                            personal info
                        </p>
                        <p 
                            id="status" 
                            onClick={(e) => handleSettingsPage(e)} 
                            className={`${settingsPage === 'status' ? 'bg-g text-d': 'text-g' } rounded-lg p-4 bg-white cursor-pointer hover:text-d font-bold text-lg transition`}
                        >
                            status
                        </p>
                    </div>
                    <div className="flex-1 self-start">
                        { settingsPage === 'personal' ? (
                            <div className="bg-white">
                                <h1 className="font-bold text-2xl">Personal Info</h1>
                                <ul>
                                    <li className="pl-8 flex justify-between mt-4 border-b-2">
                                        <span className="font-medium text-lg">name:</span>
                                        <span className="font-bold text-2xl">test</span>
                                        <a href="#" className="text-facebook text-lg">edit</a>
                                    </li>

                                    <li className="pl-8 flex justify-between mt-4 border-b-2">
                                        <span>username:</span>
                                        <span className="font-bold text-lg">test</span>
                                        <a href="#" className="text-facebook text-lg">edit</a>
                                    </li>

                                    <li className="pl-8 flex justify-between mt-4 border-b-2">
                                        <span>email:</span>
                                        <span className="font-bold text-lg">test@test.com</span>
                                        <a href="#" className="text-facebook text-lg">edit</a>
                                    </li>
                                </ul>
                            </div> ) 
                            : ( 
                                <div className="bg-white">
                                    <h1 className="font-bold text-2xl">Status</h1>
                                    <div className="m-4 px-8 flex justify-around items-center">
                                        <p className="font-bold">status</p>
                                        <div onClick={handleStatus} className={`${status ? 'bg-facebook' : 'bg-d' }  w-12 h-8 rounded-2xl relative transition cursor-pointer`}>
                                            <div className={`rounded-full w-8 h-8 bg-light-gray absolute transform ${status ? '-translate-x-2' : 'translate-x-6'} transition`}></div>
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
