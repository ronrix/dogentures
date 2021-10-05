import React, {useState, useEffect} from "react";

import sample from '../../../assets/dog-01.jpeg';
import {gql, useQuery} from '@apollo/client';

import {SERVER_PATH} from '../../../config/index.js';

const GET_ALL_USERS = gql`
    query GetInfo {
        getAllUsers {
            name
            avatar
        }
    }
`;

export const Explore = () => {

    const {data} = useQuery(GET_ALL_USERS, {
        context: { 
            headers: { 'authorization': `Bearer ${JSON.parse(JSON.stringify(localStorage.getItem('token')))} `} 
        },
    });
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const searched = data?.getAllUsers?.filter(value => value?.name.includes(searchInput)) 
        console.log(searched);
        setSearchResults(searched);
    }, [searchInput, data]);

    return (
        <div className="sm:pl-20 mg:pl-30 lg:pl-96 w-full bg-gray-600 h-screen">
            <div className="pl-16 pr-14 pt-7">
                <h1 className="font-bold text-lg">Explore</h1>
                <div className="relative mt-2">
                    <input type="text" className="w-full p-2 border-2 border-lg rounded-md" placeholder={'make a search'} 
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                </div>

                {/*<div className="mt-4">
                    <p>"recent searches"</p>
                    <div className="my-2 flex flex-col justify-center">
                        <div className="flex items-center hover:bg-g p-2 transition">
                            <img src={sample} className="rounded-full w-16" />
                            <span className="ml-4 font-bold text-lg">ronrix magwate</span>
                        </div>
                    </div>
                </div>*/}

                <div className="mt-4">
                    <p>"known dogs"</p>
                    {searchResults?.map(result => {
                        return (
                            <div className="my-2 flex flex-col justify-center hover:bg-lg transition cursor-pointer">
                                <div className="flex items-center hover:bg-g p-2 transition">
                                    <div className="w-16 h-16 rounded-full overflow-hidden">
                                        <img src={`${SERVER_PATH}images/profile/${result.name}/${result.avatar}`} className="rounded-full" />
                                    </div>
                                    <span className="ml-4 font-bold text-lg">{result.name}</span>
                                </div>
                            </div>
                            )
                        })}
                </div>

            </div>
        </div>
    );
};
