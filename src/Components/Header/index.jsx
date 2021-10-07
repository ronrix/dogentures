import React, {useState} from "react";

import { ProfInfo } from "./ProfInfo.jsx";
import { Navs } from "./Navs.jsx";

export const SideHeader = () => {

    const isDirectPage = window.location.pathname === "/app/direct";

    const [isShownState, setIsShownState] = useState(false);

    function handleShow() {
        setIsShownState(!isShownState);
    }

    return (
        <>
            <div onClick={handleShow} className={`transform sm:block md:hidden absolute text-center z-10 ${isShownState ? 'translate-x-20' : 'translate-x-2' } transition`}>
                <i className={`fas fa-chevron-${isShownState ? 'left' : 'right'} text-xl text-d`}></i>
            </div>
            <div className={`transform ${isShownState? 'sm:translate-x-0' : 'sm:-translate-x-full'} md:translate-x-0 flex flex-col bg-l flex-auto lg:w-1/4 h-screen fixed items-center justify-around sm:w-20 transition sm:z-40 md:z-0`}>
                <ProfInfo />
                <Navs />
            </div>
        </>
    );
};
