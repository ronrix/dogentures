import React, {useState} from "react";
import sample from "../../../assets/default-prof-1.webp";
import {SERVER_PATH} from '../../../config/index.js';

import {useMutation, gql, useQuery} from '@apollo/client';

const CREATE_MSG = gql`
    mutation CreateMessageMutation($msg: String!, $receiverId: String!) {
      createMessage(msg: $msg, receiverId: $receiverId)
}
`;

export const MsgBox = ({data, isClickedMsg, info}) => {
    const [msgInput, setMsgInput] = useState("");
    const [createMessage] = useMutation(CREATE_MSG, {
        context: { headers: { authorization: `Bearer ${localStorage.getItem('token')}` } },
    })

    const me = info?.getInfo?.name;

    // get the specific msg with id that's been clicked
    const readMsgs = (data && isClickedMsg ) ? data.getFilteredMsgsByUserId?.filter((msg) => msg.id === isClickedMsg) : null;

    function handleSendingMsg() {
        createMessage({variables: {msg: msgInput, receiverId: readMsgs[0]?.receiver?.id} })
        setMsgInput("");
    }
    return (
        <div className="ml-4 relative w-full h-screen overflow-hidden bg-white p-4 rounded-md relative">
            <div className="flex justify-between items-center box-shadow">
                <div>
                    <span className="sm:text-lg md:text-2xl font-bold mr-2">{me === readMsgs && readMsgs[0]?.receiver?.name ? readMsgs && readMsgs[0]?.sender?.name : readMsgs && readMsgs[0]?.receiver?.name}</span>
                    <span className="sm:text-xs md:text-sm">online</span>
                </div>
               <div className="sm:w-14 sm:h-14 md:w-20 md:h-20 rounded-full overflow-hidden shadow-lg flex items-center justify-center mr-2">
                   <img src={`${SERVER_PATH}images/profile/${me === readMsgs && readMsgs[0]?.receiver?.name ? readMsgs && readMsgs[0]?.sender?.name : readMsgs && readMsgs[0]?.receiver?.name  }/${me === readMsgs && readMsgs[0]?.receiver?.name ? readMsgs && readMsgs[0]?.sender?.avatar : readMsgs && readMsgs[0]?.receiver?.avatar  }`} 
                        className="w-44 rounded-full mr-2"
                    />
                </div>
            </div>

            <div className="bg-light-gray w-full h-4/5 mt-4 p-4 rounded-lg flex flex-col justify-between overflow-auto">
                
                <div className="flex flex-col mb-4">
                    { readMsgs && readMsgs[0]?.message?.map((msg, idx) => {
                        const img = me === msg?.user ?
                            `${SERVER_PATH}images/profile/${msg?.user}/${info?.getInfo?.avatar}`
                            : me === readMsgs[0]?.receiver?.name ? `${SERVER_PATH}images/profile/${readMsgs[0]?.sender?.name}/${readMsgs[0]?.sender?.avatar}` : 
                            `${SERVER_PATH}images/profile/${readMsgs[0]?.receiver?.name}/${readMsgs[0]?.receiver?.avatar}`;
                        console.log(img);
                        
                        return (
                            <div key={idx} className={`${me === msg.user ? 'self-end' : 'self-start'} rounded-lg p-2 my-2 flex items-center `}>
                                <div className="sm:w-6 sm:h-6 md:w-10 md:h-10 rounded-full overflow-hidden shadow-lg flex items-center justify-center">
                                    <img 
                                        src={img} 
                                        className="sm:w-6 md:w-10 rounded-full" 
                                    />
                                </div>
                                <p className={`${me === msg.user ? 'text-l bg-facebook' : 'text-d bg-l'} p-2 rounded-lg ml-2 sm:text-xs md:text-sm`}>
                                    {msg?.msg} 
                                </p>
                            </div>
                        )}
                    )}

                </div>
                <div className="flex absolute bottom-0 bg-white left-0 right-0 p-4">
                    <input
                        type="text"
                        className="sm:w-10 md:w-full p-2 flex-1 bg-lg outline-none rounded-md focus:sm:w-full break-words border"
                        placeholder="write a message"
                        value={msgInput}
                        onChange={e => setMsgInput(e.target.value)}
                    />
                    <button 
                        onClick={handleSendingMsg}
                        className="transform bg-lbtn text-l rounded-lg p-2 font-bold text-md ml-2 hover:opacity-75 transition">
                        send
                    </button>
                </div>
            </div>
        </div>
    );
};
