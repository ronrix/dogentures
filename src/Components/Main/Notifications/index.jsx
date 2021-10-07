import React from "react";
import { NewNotif } from "./NewNotif";
import { OpenedNotif } from "./OpenedNotif";

export const Notifications = () => {
    return (
        <div className="sm:pl-2 md:pl-24 lg:pl-96 w-full bg-gray-600 h-screen">
            <div className="sm:px-4 md:px-16 pt-7">
                <div>
                    <h1 className="font-bold text-lg">Notifications</h1>
                </div>
                <NewNotif />
                <OpenedNotif />
            </div>
        </div>
    );
};
