import React from "react";
import {useQuery, gql} from '@apollo/client';
import {SERVER_PATH} from '../../config/index.js';

const QUERY = gql`
    query GetInfo {
        getInfo {
            avatar
            name
            posts
        }
    }
`;

export const ProfInfo = () => {
    const { data } = useQuery(QUERY,
        { context: { headers: { 'authorization': `Bearer ${JSON.parse(JSON.stringify(localStorage.getItem('token')))} `} }}
    ); 
    console.log(SERVER_PATH);

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex lg:items-center lg:justify-start lg:w-full sm:w-16">
                <span className={`sm:invisible lg:visible text-3xl text-d font-extrabold ml-4 uppercase`}>
                    Dogentures
                </span>
                <span className="font-bold text-4xl left-0 sm:visible lg:invisible absolute left-8">D</span>
            </div>
            <div className="flex flex-col items-center justify-center mt-2">
                { data?.getInfo?.avatar ? (
                    <div className="sm:w-14 sm:h-14 lg:w-24 rounded-full lg:h-24 overflow-hidden shadow-lg">
                        <img src={`${SERVER_PATH}images/profile/${data?.getInfo?.name}/${data?.getInfo?.avatar}`} 
                            alt="user avatar"
                            className="rounded-full"
                        /> 
                    </div>)
                : (<i class="far fa-user-circle text-5xl"></i>) }
                <span className="text-d font-extrabold text-lg">
                    {data?.getInfo?.name}
                </span>
                <span className="text-ld text-sm font-light">
                    @{data?.getInfo?.name}
                </span>
            </div>
            <div className="flex justify-center w-full mt-8 relative ml-2 font-extrabold">
                <div className="flex flex-col items-center justify-center mr-2">
                    <span className="text-d font-bold">
                        {data?.getInfo?.posts}
                    </span>
                    <span className="font-bold">posts</span>
                </div>
                <div className="w-0.5 bg-gray-600 h-full"></div>
            </div>
        </div>
    );
};
