import React, { useState, useEffect } from "react";

import { gql, useQuery } from "@apollo/client";

import { SearchResults } from "./SearchResults";
import { SearchBox } from "./SearchBox";

const GET_ALL_USERS = gql`
    query GetInfo {
        getAllUsers {
            name
            avatar
        }
    }
`;

export const Explore = () => {
    const { data } = useQuery(GET_ALL_USERS, {
        context: {
            headers: {
                authorization: `Bearer ${JSON.parse(
                    JSON.stringify(localStorage.getItem("token"))
                )} `,
            },
        },
    });
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const [imgErr, setImgErr] = useState(false);

    useEffect(() => {
        // seaching results
        const searched = data?.getAllUsers?.filter((value) => {
            if(!searchInput) {
                return;
            }
            return value?.name.includes(searchInput)
        });
        setSearchResults(searched);

        // handling imgErr rendering
        setImgErr(false);

    }, [searchInput, data]);
//
    return (
        <div className="sm:pl-2 md:pl-32 lg:pl-96 w-full bg-gray-600 h-screen">
            <div className="sm:px-4 md:px-4 lg:px-20 pt-7">
                <h1 className="font-bold text-lg">Explore</h1>
                <SearchBox
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                />
                <SearchResults imgErr={imgErr} setImgErr={setImgErr} searchResults={searchResults} searchInput={searchInput} />
            </div>
        </div>
    );
};
