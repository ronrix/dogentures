import React from "react";

import { ProfInfo } from "./ProfInfo.jsx";
import { Navs } from "./Navs.jsx";

export const SideHeader = () => {
    return (
        <div className="flex flex-col bg-l flex-auto lg:w-1/4 h-screen fixed items-center justify-around sm:w-20">
            <ProfInfo />
            <Navs />
        </div>
    );
};
