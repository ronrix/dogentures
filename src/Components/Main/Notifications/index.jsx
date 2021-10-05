import React from "react";

import sample from '../../../assets/dog-02.jpeg';

export const Notifications = () => {
    return (
        <div className="pl-96 w-full bg-gray-600 h-screen">
            <div className="pl-16 pr-14 pt-7">
                <div>
                    <h1 className="font-bold text-lg">Notifications</h1>
                </div>
                {/* new notifications */}
                <div className="mt-8 p-4 bg-light-gray rounded-lg hover:bg-g transition">
                    <div className="flex justify-between items-center">
                        <span className="font-bold text-md">date</span>
                        <img src={sample} className="w-10 rounded-full" />
                    </div>
                    <p>this is an example notification</p>
                </div>

                {/* opened notifications */}
                <div className="mt-8 p-4 bg-l rounded-lg hover:bg-g transition">
                    <div className="flex justify-between items-center">
                        <span className="font-bold text-md">date</span>
                        <img src={sample} className="w-10 rounded-full" />
                    </div>
                    <p>this is an example notification</p>
                </div>
            </div>
        </div>
    );
};
