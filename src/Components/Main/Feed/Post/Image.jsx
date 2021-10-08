import React, { useState, useRef, useEffect } from "react";
import sampleImg from "../../../../assets/sample-img.webp";
import {SERVER_PATH} from '../../../../config/index.js';
import {gql, useMutation} from '@apollo/client';

const HEART_REACT = gql`
    mutation React($id: ID!) {
        reaction(id: $id)
    }
`;

export const Image = ({ userInfo, postImage, id, loading }) => {
    const token = JSON.parse(JSON.stringify(localStorage.getItem('token')));
    const [reaction] = useMutation(HEART_REACT, { pollInterval: 200, context: { headers: { 'authorization': `Bearer ${token}` } } });

    const [reacted, setReacted] = useState(false);

    const [onImgError, setOnImgError] = useState(false);

    useEffect(() => {
        if(reacted) {
            setTimeout(()=>{
                setReacted(false);
            }, 1000);
        }
    });

    function handleHeartReaction() {
        reaction({ variables: { id: id } });
        setReacted(true); 
    }

    const lastTap = useRef(null);
    function handleTouchEvent() {
        const currTime = new Date().getTime();
        const tapLength = currTime - lastTap.current;
        if(tapLength < 500 && tapLength > 0) {
            reaction({ variables: { id: id } });
            setReacted(true)
        }
        lastTap.current = currTime;
    }

    return (
        <div className="flex-1 relative flex justify-center items-center">
            { loading ? (
                <div className="h-96 w-1/2 animate-pulse bg-d py-64">
                </div>
            ) : !onImgError ? (
                <img
                        onDoubleClick={handleHeartReaction}
                        onTouchEnd={handleTouchEvent}
                        src={postImage ? `${SERVER_PATH}images/posts/${userInfo?.getUserInfoById?.name}/${postImage}` : sampleImg}
                        alt="dogs"
                        className="sm:w-full md:w-10/12 cursor-pointer bg-ld h-full transform scale-75"
                        onError={() => setOnImgError(true)}
                />) : (<p className="text-center sm:w-full md:w-1/2 p-4 text-r">error: img not retrieved, heroku free hosting</p>)
            }


            <div className={`absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center transition duration-300 ease-in-out ${ reacted ? "visiblle" : 'invisible' } `}>
                <div className="w-full h-full flex justify-center items-center p-32">
                    <i id="heart" className={`fas fa-heart text-8xl cursor-pointer text-r mx-2 absolute transform ease-in-out ${reacted ? 'scale-100' : 'scale-0'} duration-200 transition`}></i> 
                </div> 
            </div>
        </div>
    );
};
