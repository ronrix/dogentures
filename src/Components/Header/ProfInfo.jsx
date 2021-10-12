import React, {useState} from "react";
import {useQuery, gql} from '@apollo/client';
import {SERVER_PATH} from '../../config/index.js';

const INFO = gql`
    query GetInfo {
        getInfo {
            avatar
            name
            posts
        }
    }
`;

export const ProfInfo = () => {
    const { data } = useQuery(INFO,
        { context: { headers: { 'authorization': `Bearer ${JSON.parse(JSON.stringify(localStorage.getItem('token')))} `} }}
    ); 
    const [isImgErr, setImgErr] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex lg:items-center lg:justify-start lg:w-full sm:w-16">
                <span className={`sm:invisible lg:visible text-3xl text-d font-extrabold ml-4 uppercase`}>
                    Dogentures
                </span>
                <span className="font-bold text-4xl sm:visible lg:invisible absolute left-7">D</span>
            </div>
            <div className="flex flex-col items-center justify-center mt-2">
                { data?.getInfo?.avatar && !isImgErr? (
                    <div className="sm:w-10 sm:h-10 lg:w-24 rounded-full lg:h-24 overflow-hidden shadow-lg">
                        <img src={`${SERVER_PATH}images/profile/${data?.getInfo?.name}/${data?.getInfo?.avatar}`} 
                            alt="user avatar"
                            className="rounded-full"
                            onError={() => setImgErr(true)}
                        /> 
                    </div>)
                    : (<i className="far fa-user-circle sm:text-3xl md:text-5xl"></i>) }
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
