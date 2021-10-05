import React, { useState } from "react";
import sampleImg from "../../../../assets/sample-img.webp";
import { gql, useMutation } from '@apollo/client';

const HEART_REACT = gql`
    mutation React($id: Int!) {
        reaction(id: $id)
    }
`;

export const Image = ({ userInfo, postImage, hearts, id }) => {
    const token = JSON.parse(JSON.stringify(localStorage.getItem('token')));
    const [reaction] = useMutation(HEART_REACT, { context: { headers: { 'authorization': `Bearer ${token}` } } });

    const [customClass, setCustomClass] = useState('');
    const [reacted, setReacted] = useState(false);
    const [hovered, setHovered] = useState(false);

    function handleHeartReaction() {
        alert('you clicked me, whole heartedly');
        reaction({ variables: { id: id } });
        setCustomClass('animation-ping text-r');
        setReacted(true); 
    }

    function handleMouseOver() {
        alert("hovered");
        setHovered(!hovered);
    }

    return (
        <>
            <img
                src={postImage ? `http://localhost:4000/images/posts/${userInfo?.getUserInfoById?.name}/${postImage}` : sampleImg}
                alt="dogs"
                className="w-1/2 cursor-pointer bg-ld h-1/2"
            /> 

            <div className="flex items-center absolute z-10 bg-l rounded-r-sm p-2">
                <i
                    id="heart"
                    className={`fas fa-heart text-4xl cursor-pointer text-r mx-2`}
                ></i>
                <span>{hearts}</span>
            </div>

            <div className={`z-20 absolute top-0 left-0 bottom-0 right-1/2 flex items-center justify-center opacity-0 ${hovered ? 'hover:opacity-100' : ''} transition duration-300 ease-in-out`}>
                <div className="w-full h-full flex justify-center items-center p-32">
                    <span className={`bg-l text-l px-4 text-d ${reacted || customClass ? 'opacity-0': 'opacity-100'}`}>double click to react</span>
                    <i id="heart" className={`fas fa-heart text-9xl cursor-pointer text-l mx-2 absolute transform ${reacted ? 'opacity-100': 'opacity-0' } ${customClass} `}></i> 
                </div> 
            </div>
        </>
    );
};
