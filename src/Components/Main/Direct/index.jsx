import React, {useState} from "react";

import sample from '../../../assets/default-prof-1.webp';

export const DirectMessages = () => {

    const [isMsgsShown, setIsMsgsShown] = useState(false);

    return (
        <div className="sm:pl-14 mg:pl-30 lg:pl-96 w-full bg-white h-screen overflow-auto ">
            <div className="lg:pl-16 lg:pr-14 pt-7 pb-0 flex p-8 relative overflow-hidden">
                <div
                    className="w-20 h-20 rounded-full bg-d sm:visible lg:invisible absolute left-4 bottom-20 z-20 flex justify-center items-center text-center hover:opacity-75"
                    onClick={() => setIsMsgsShown(!isMsgsShown)}
                >
                    <i className="fas fa-bars text-l text-5xl"></i>
                </div>
                <div className={`sm:z-10 shadow-lg sm:visible sm:absolute sm:transform ${isMsgsShown ? 'sm:translate-y-0' : 'sm:translate-y-full'} lg:translate-x-0 w-96 bg-light-gray p-4 h-screen rounded-md overflow-auto relative transition`}>
                    <input type="text" placeholder="search" className="w-full rounded-full p-2 border-none outline-none" />
                    <div className="mt-2 font-md">messages</div>

                    <div className="">

                    { /* message box */}
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

                { /* message form */}
                <div className="ml-4 relative w-full h-screen relative overflow-hidden">
                    <div className="flex justify-between items-center box-shadow">
                        <div>
                            <span className="text-2xl font-bold mr-2">the name</span>
                            <span>online</span>
                        </div>
                        <img src={sample} className="rounded-full w-24"/>
                    </div>

                    <div className="bg-light-gray w-full h-4/5 mt-4 p-4 rounded-lg flex flex-col justify-between overflow-auto">
                        <div className="flex flex-col">
                            <div className="rounded-lg p-2 inline-block my-2 flex items-center self-start">
                                <img src={sample} className="w-10 rounded-full" />
                                <p className="bg-l p-2 rounded-lg ml-2">hello fuck you</p>
                            </div>
                            <div className="rounded-lg p-2 inline-block my-2 flex items-center self-end">
                                <img src={sample} className="w-10 rounded-full" />
                                <p className="bg-facebook text-white p-2 rounded-lg ml-2">hello ronrix</p>
                            </div>

                            <div className="rounded-lg p-2 inline-block my-2 flex items-center self-start">
                                <img src={sample} className="w-10 rounded-full" />
                                <p className="bg-l p-2 rounded-lg ml-2">hello world</p>
                            </div>
                        </div>
                        <div className="flex">
                            <input type='text' className="p-2 flex-1 bg-lg border-none outline-none rounded-md" placeholder="write a message" />
                            <button className="bg-lbtn text-l rounded-lg p-2 font-bold text-md ml-2 hover:opacity-75 transition" >send</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
