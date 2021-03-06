import React from "react";

import { TopBar } from "./TopBar.jsx";
import { Contents } from "./Content.jsx";

export const DogosFeed = () => {
    return (
        <div className="lg:pl-96 md:pl-32 sm:pl-20 lg:bg-light-gray w-full bg-light-gray font-arial">
            <div className="pl-16 pr-14 pt-7">
                <TopBar />
                <div className="my-8">
                    <div className="relative text-d">
                        Feed
                        <div className="absolute w-6 h-2 bg-ld rounded-lg"></div>
                    </div>
                    <Contents />
                </div>
            </div>
        </div>
    );
};
