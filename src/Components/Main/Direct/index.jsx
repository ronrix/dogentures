import React, { useState } from "react";

import sample from "../../../assets/default-prof-1.webp";
import { MobileMsgs } from "./MobileMsgs";
import { MsgBox } from "./MsgBox";
import { Msgs } from "./Msgs";

export const DirectMessages = () => {
    const [isMsgsShown, setIsMsgsShown] = useState(false);

    return (
        <div className="sm:pl-0 sm:mt-8 md:pl-20 lg:pl-96 w-full bg-white h-screen overflow-auto ">
            <div className="sm:px-2 md:px-8 pt-7 pb-0 flex p-8 relative overflow-hidden">
                <MobileMsgs
                    setIsMsgsShown={setIsMsgsShown}
                    isMsgsShown={isMsgsShown}
                />
                <Msgs isMsgsShown={isMsgsShown} />
                <MsgBox />
            </div>
        </div>
    );
};
