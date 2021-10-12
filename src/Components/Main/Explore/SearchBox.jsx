import React from "react";

export const SearchBox = ({ searchInput, setSearchInput }) => {
    return (
        <div className="relative mt-2">
            <input
                type="text"
                className="w-full p-2 border-lg rounded-md outline-none focus:ring focus:ring-d focus:ring-2"
                placeholder={"make a search"}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
        </div>
    );
};
