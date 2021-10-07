import React from "react";
import sample from "../../../assets/dog-02.jpeg";

export const NewNotif = () => {
    return (
        <div className="mt-8 p-4 bg-light-gray rounded-lg hover:bg-g transition shadow-md">
            <div className="flex justify-between items-center">
                <span className="font-bold text-md">date</span>
                <div className="sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full shadow-lg overflow-hidden">
                    <img src={sample} className="rounded-full" />
                </div>
            </div>
            <p className="sm:text-sm md:text-md">this is an example notification</p>
        </div>
    );
};
