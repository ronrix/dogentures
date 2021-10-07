import React from "react";

import { Image } from "./Image.jsx";
import { Info } from "./Info.jsx";
import {gql, useQuery} from '@apollo/client';

const QUERY = gql`
    query GetInfo($userId: ID!) {
        getUserInfoById(userId: $userId) {
            avatar
            name 
        }
    }
`; 


export const Post = ({data}) => {

   const { data: userInfo, loading } = useQuery(QUERY, 
       { variables: {userId: data.userId}, context: { headers: { 'authorization': `Bearer ${JSON.parse(JSON.stringify(localStorage.getItem('token')))} `} }}
   );

    return (
        <>
            { loading ? (
                <div className="animate-pulse h-96 max-w-full bg-l text-l mb-2 relative rounded-lg shadow-lg py-64"></div>
            ): (
                <div className="max-h-1/2 md:flex mt-8 md:justify-between relative bg-l rounded-lg shadow-lg overflow-hidden">
                    <Image postImage={data.image} userInfo={userInfo} hearts={data.hearts} id={data.id} loading={loading} />
                    <Info userInfo={userInfo} description={data.description} postId={data.id} />
                </div>
            )}
        </>
    );
};
