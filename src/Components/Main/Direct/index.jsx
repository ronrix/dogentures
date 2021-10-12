import React, { useState, useRef } from "react";

import sample from "../../../assets/default-prof-1.webp";
import { MobileMsgs } from "./MobileMsgs";
import { MsgBox } from "./MsgBox";
import { Msgs } from "./Msgs";

import {SERVER_PATH} from '../../../config/index.js';

import {useQuery, gql} from '@apollo/client';
import sadDog from '../../../assets/sad-dog.png';

const FILTERED_MSGS = gql`
    query MessagesResolver{
        getFilteredMsgsByUserId {
            id
            receiver{
                id
                name
                avatar
            }
            sender{
                id
                name
                avatar
            }
            message {
              msg
              user
            }
        }
    }
`;

const INFO = gql`
    query GetInfo {
        getInfo {
            avatar
            name
            posts
        }
    }
`;


const ALL_USERS = gql`
    query GetInfo {
        getAllUsers {
            avatar
            name
        }
    }
`;

export const DirectMessages = () => {
    const [isMsgsShown, setIsMsgsShown] = useState(false);
    
    // for no messages 
    const [modalForFirstMsg, setModalForFirstMsg] = useState(false);
    
    // search input
    const [searchInput, setSearchInput] = useState("");
    let noMatch = true;
    const [sendToValue, setSendToValue] = useState(null);

    const {data, loading} = useQuery(FILTERED_MSGS, {
        context: { headers: { authorization: `Bearer ${localStorage.getItem('token')}` } },
        pollInterval: 100,
    });

    const { data: info } = useQuery(INFO,
        { context: { headers: { 'authorization': `Bearer ${JSON.parse(JSON.stringify(localStorage.getItem('token')))} `} }}
    ); 

    const { data: allUsers } = useQuery(ALL_USERS,
        { context: { headers: { 'authorization': `Bearer ${JSON.parse(JSON.stringify(localStorage.getItem('token')))} `} }}
    ); 

    const [isClickedMsg, setIsClickedMsg] = useState(`${data?.getFilteredMsgsByUserId?.length > 0 ? data?.getFilteredMsgsByUserId[data?.getFilteredMsgsByUserId?.length - 1].id : null}`);
    const reverseMsgs = data && data.getFilteredMsgsByUserId[0]?.message;

    function handleSearch(user) {
        setSearchInput("");
        setSendToValue({user, ...sendToValue});
    }

    return (
        <>
        { data && data.getFilteredMsgsByUserId.length > 0 ? (
            <div className="sm:pl-0 sm:mt-8 md:pl-20 lg:pl-96 w-full h-screen overflow-auto ">
                <div className="sm:px-2 md:px-8 pt-7 pb-0 flex p-8 relative overflow-hidden">
                    <MobileMsgs
                        setIsMsgsShown={setIsMsgsShown}
                        isMsgsShown={isMsgsShown}
                    />
                    <Msgs isMsgsShown={isMsgsShown} data={data} setIsClickedMsg={setIsClickedMsg} info={info} />
                    <MsgBox isClickedMsg={isClickedMsg} data={data} info={info} />
                </div>
            </div>
            ) :  <div className="ml-20 absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center">
                    <img src={sadDog} className="w-52" />
                    <div className="flex flex-col items-center">
                        <span className="font-bold">no messages</span>
                        <span onClick={() => setModalForFirstMsg(true)} className="text-lbtn">click here to start a message</span>
                    </div>
                </div>
        }
            <div onClick={() => setModalForFirstMsg(false)} className={`${modalForFirstMsg ? 'block': 'hidden'} absolute top-0 bottom-0 left-0 right-0 bg-d opacity-75`}></div>
            <div className={`transform ${modalForFirstMsg ? 'scale-100': 'scale-0'} absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center transition`}>
                <div className={`bg-white rounded-lg p-4 relative w-96`}>
                    <div>
                        <div className="text-sm">make a search</div>
                        <div className="relative">
                            <input type="text" className="p-2 ring-1 w-full" placeholder="add recipient" value={searchInput} onChange={e => setSearchInput(e.target.value)} />
                            <div className={`${searchInput ? 'block': 'hidden'} absolute bg-white w-full flex flex-col shadow-lg`}>
                                {
                                    allUsers?.getAllUsers?.map(user => {
                                        if(searchInput && user?.name?.includes(searchInput)) {
                                            noMatch = false;
                                            return (
                                                <div onClick={() => handleSearch(user)} className="p-2 flex items-center">
                                                    <div className="sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full overflow-hidden shadow-lg flex items-center justify-center mr-2">
                                                        <img src={`${SERVER_PATH}images/profile/${user?.name}/${user?.avatar}`} className="w-10" />
                                                    </div>
                                                    <span>{user.name}</span>
                                                </div>);
                                        }
                                        return null;
                                })}
                                <div className={`${noMatch && searchInput?.length > 0 ? 'block' : 'hidden'} p-2`}>no search found</div>
                            </div>
                        </div>
                        
                        <div className="mt-2 text-sm px-2">send to: </div>
                        <div className="">
                                { sendToValue && (
                                    <div className="inline-block bg-l px-2 mr-2 mb-2">
                                        <div className="flex items-center">
                                            <div className="sm:w-4 sm:h-4 md:w-6 md:h-6 rounded-full overflow-hidden shadow-lg flex items-center justify-center mr-2">
                                                <img src={`${SERVER_PATH}images/profile/${sendToValue?.name}/${sendToValue?.avatar}`} className="w-10" />
                                            </div>
                                            <span>{sendToValue?.name}</span>
                                            <i className="fas fa-times text-md ml-2 hover:text-r"></i>
                                        </div>
                                    </div>)
                                }
                        </div>

                        <div className="mt-4">
                            <div className="font-bold text-sm">write your message here</div>
                            <textarea className="mt-2 ring-2 w-full p-2" placeholder="write anything..."></textarea>
                        </div>
                        <div className="w-full flex justify-start items-center">
                            <button onClick={() => alert("hello")} className="p-2 bg-d text-l hover:bg-facebook rounded-lg">send</button>
                            <button onClick={() => setModalForFirstMsg(false)} className="p-2 bg-d text-l ml-4 hover:bg-r rounded-lg">cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
