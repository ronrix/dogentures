import React, {useState, useEffect} from "react";
import { SERVER_PATH } from "../../../config/index.js";

import {useMutation, gql} from '@apollo/client';

const ADD_DESC = gql`
    mutation AddBioDesc($bioDesc: String!) {
        addBioDesc(bioDesc: $bioDesc)
    } `;

export const TopInfo = ({ data }) => {
    const [imgErr, setImgErr] = useState(false);
    const [descInput, setShowDescInput] = useState(false);
    const [desc, setDesc] = useState("");

    const [token] = useState(() =>
        JSON.stringify(localStorage.getItem("token"))
    );

    const [addBioDesc] = useMutation(ADD_DESC, {
        context: { headers: { authorization: `Bearer ${JSON.parse(token)}` } },
    });

    useEffect(() => {
        setImgErr(false);
    }, []);

    return (
        <>
            <div className={`${descInput ? 'block': 'hidden'} rounded-2xl z-10 bg-g opacity-50 absolute top-0 left-0 right-0 bottom-0`}> </div>
                
            <div className={`${descInput ? 'block': 'hidden'} absolute flex justify-center items-center top-0 bottom-0 left-0 right-0 border`}>
                <div className="z-10 absolute bg-l text-d flex flex-col px-4 pt-4 items-center rounded-lg">
                    <input type="text" placeholder={'add bio description'} className="p-2 rounded-lg" value={desc} onChange={e => setDesc(e.target.value)} />
                    <div className="m-2">
                        <button 
                            className="px-2 bg-d text-l hover:bg-r"
                            onClick={() => addBioDesc({variables: { bioDesc: desc }})}
                        >
                            save
                        </button>
                        <button 
                            onClick={() => setShowDescInput(false)}
                            className="px-2 bg-d text-l ml-2 hover:bg-r"
                        >
                            cancel
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between mb-4">
                <div>
                    <h2 className="font-bold text-2xl text-d">
                        {data?.getInfo?.name}
                    </h2>
                    <span className="text-md">@{data?.getInfo?.name}</span>
        
                    <div className="m-4 font-medium text-lg relative flex items-center">
                        {/*<div className="bg-d text-l text-xs absolute -top-3 left-0">not complete</div>*/}
                        <div className="text-md text-d">{data?.getInfo?.bioDesc}</div>
                        <span onClick={() => setShowDescInput(true)} className="text-facebook text-xs absolute -bottom-2 right-0 cursor-pointer hover:text-lbtn">edit</span>
                    </div>
                </div>
                    { !imgErr ? (
                        <div className="sm:w-20 sm:h-20 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg flex items-center justify-center">
                            <img
                                src={`${SERVER_PATH}images/profile/${data?.getInfo?.name}/${data?.getInfo?.avatar}`}
                                alt="avatar"
                                className="rounded-full"
                                onError={() => setImgErr(true)}
                                onload={() => setImgErr(false)}
                            />
                        </div>) : <i className="fas fa-user-circle sm:text-5xl md:text-7xl text-d"></i>
                    }
            </div>
        </>
    );
};
