import React from "react";

import { NavLink } from "./Links.jsx";

export const Navs = () => {
    const handleLogOut = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

    return (
        <ul className="flex flex-col w-full justify-evenly items-center h-full font-bold sm:pl-4 lg:pl-14 ">
            <NavLink
                routeLink={"/app"}
                value="news"
                icon={"fas fa-rss-square"}
            />
            <NavLink
                routeLink={"/app/posts"}
                value="posts"
                icon={"fas fa-dog"}
            />
            <NavLink
                routeLink={"/app/explore"}
                value="explore"
                icon={"fas fa-search"}
            />
            <NavLink
                routeLink={"/app/notifications"}
                value="notifications"
                icon={"far fa-bell"}
            />
            <NavLink
                routeLink={"/app/direct"}
                value="direct"
                icon={"fas fa-location-arrow"}
            />
            <NavLink
                routeLink={"/app/settings"}
                value="settings"
                icon={"fas fa-cogs"}
            />
            <li
                className={`flex w-full relative hover:text-ld group py-2`}
                onClick={handleLogOut}
            >
                <div className="flex items-center justify-center">
                    <i class="fas fa-sign-out-alt sm:text-lg md:text-2xl pl-2 text-g"></i>
                    <button className="ml-4 cursor-pointer font-bold">
                        <span className="sm:invisible lg:visible">logout</span>
                    </button>
                </div>
                <div></div>
            </li>
        </ul>
    );
};
