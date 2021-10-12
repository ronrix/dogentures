import React, {useState} from "react";

import { Image } from "./Image.jsx";
import { Info } from "./Info.jsx";
import {gql, useQuery, useMutation} from '@apollo/client';
import {SERVER_PATH} from '../../../../config/index.js';

const QUERY = gql`
    query GetInfo($userId: ID!) {
        getUserInfoById(userId: $userId) {
            avatar
            name 
        }
    }
`; 


export const Post = ({data}) => {
    const [onImgError, setOnImgError] = useState(false);
    const [previewImg, setPreviewImg] = useState(false);

   const { data: userInfo, loading } = useQuery(QUERY, 
       { variables: {userId: data.userId}, context: { headers: { 'authorization': `Bearer ${ localStorage.getItem('token') } `} }}
   );

    return (
        <>
            { loading ? (
                <div className="animate-pulse h-96 max-w-full bg-l text-l mb-2 relative rounded-lg shadow-lg py-64"></div>
            ): (
                <div className="max-h-1/2 md:flex mt-8 md:justify-between relative bg-l rounded-lg shadow-lg bg-gradient-to-r from-d to-g overflow-hidden">
                    <Image postImage={data.image} userInfo={userInfo} id={data.id} loading={loading} setPreviewImg={setPreviewImg} previewImg={previewImg} />
                    <Info userInfo={userInfo} description={data.description} postId={data.id} hearts={data.hearts} />
                </div>
            )}

            <div className={`${previewImg ? 'block': 'hidden'} h-full absolute top-0 left-0 right-0 bottom-0 bg-g opacity-75`}>
            </div>
            <div className={`transform ${previewImg ? 'visible scale-100': 'invisible scale-0'} absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center ease-in-out transition`}>
                <i onClick={() => setPreviewImg(false)} className="fas fa-times absolute text-l text-5xl right-10 top-2 cursor-pointer hover:text-d transition"></i>
                {!onImgError ? (
                    <img 
                        src={data?.image && `${SERVER_PATH}images/posts/${userInfo?.getUserInfoById?.name}/${data?.image}`}
                        onError={() => setOnImgError(true)}
                    />) : (<p className="text-center sm:w-full md:w-1/2 p-4 text-l">S3 not supported</p>)
                }
            </div>
        </>
    );
};
