import React from "react";
import { Link } from "react-router-dom";

export const NavLink = ({ routeLink, value, icon }) => {
    return (
        <li
            className={`p-2 flex w-full relative ${window.location.pathname === routeLink?  "bg-light-gray" : ""
            } hover:text-ld group py-2 items-center rounded-l-xl font-extrabold transition`}
        >
            <Link
                to={routeLink}
                className="cursor-pointer flex justify-start items-center relative w-full"
            >
                <i class={icon}></i>
                <span className="pl-2">{value}</span>
            </Link>
            <div></div>
            <div
                className={`${
                    localStorage.getItem('nav-link') === 'feed' || routeLink.includes(localStorage.getItem('nav-link')) ? "opacity-100" : "opacity-0"
                } w-1 h-full bg-dark-gray absolute  right-0 group-hover:opacity-100 group-focus:opacity-100 transition `}
            ></div>
        </li>
    );
};
