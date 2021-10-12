import React from "react";
import { NewNotif } from "./NewNotif";
import { OpenedNotif } from "./OpenedNotif";
import {gql, useQuery} from '@apollo/client';

import sadDog from '../../../assets/sad-dog.png';
//
const GET_NOTIFS = gql`
    query NotificationResolver {
        getNotifs {
            id
            sendTo {
                name
                avatar
            }
            sendFrom {
                name
                avatar
            }
            isComment
            isReact
            isViewed
            created_at
        }
    }
`;

export const Notifications = () => {
    const {data, loading, error} = useQuery(GET_NOTIFS, { 
        context: { headers: { 'authorization': `Bearer ${ localStorage.getItem('token') } `},  
        pollInterval: 200
    }});

    return (
        <div className="sm:pl-2 md:pl-24 lg:pl-96 w-full bg-gray-600 h-screen">
            <div className="sm:px-4 md:px-16 pt-7">
                <div>
                    <h1 className="font-bold text-lg">Notifications</h1>
                </div>
                {data?.getNotifs?.length > 0 ? data?.getNotifs.map((notif) => {
                    return <NewNotif data={notif} />
                }) : (
                    <div className="sm:mt-4 md:mt-10 flex flex-col justify-center items-center text-center">
                        <img src={sadDog} className="w-52" />
                        <span className="font-bold">You got not Notification</span>
                    </div>
                )}
                {/*<OpenedNotif />*/}
            </div>
        </div>
    );
};
