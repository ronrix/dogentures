import React, {useState} from "react";
import sample from "../../../assets/dog-02.jpeg";
import {SERVER_PATH} from '../../../config/index.js';

export const NewNotif = ({data}) => {
    const [imgErr, setImgErr] = useState(false);

    return (
        <div className="mt-8 p-4 bg-g rounded-lg hover:bg-g transition shadow-md">
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <span className="font-bold text-md">{data?.sendFrom?.name}</span>
                    <p className="sm:text-sm md:text-md">{data?.sendFrom?.name} has reacted to your post</p>
                </div>
                { !imgErr ? (
                    <div className="sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full shadow-lg overflow-hidden">
                        <img
                            src={`${SERVER_PATH}images/profile/${data?.sendFrom?.name}/${data?.sendFrom?.avatar}`}
                            alt="avatar"
                            className="rounded-full"
                            onError={() => setImgErr(true)}
                            onload={() => setImgErr(false)}
                        />
                    </div>
                        ) : <i className="fas fa-user-circle sm:text-3xl md:text-5xl text-d"></i>
                }
            </div>
        </div>
    );
};
