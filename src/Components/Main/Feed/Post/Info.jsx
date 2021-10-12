import React, { useState }  from "react";
import { useQuery, gql, useSubscription, useMutation } from '@apollo/client';
import {SERVER_PATH} from '../../../../config/index.js'; 
const GET_COMMENTS = gql`
    query GetComments($id: ID!) {
        getComments(postId: $id) {
            id
            comment
            postId
            userId
        }
    }
`;

const POST_COMMENT = gql`
    mutation ($id: ID!, $comment: String!) {
        createComment(id: $id, comment: $comment) 
    }
`;

export const Info = ({userInfo, description, postId, hearts}) => {
    const [comment, setComment] = useState("");
    const [isImgError, setIsImgError] = useState(false);

    const {data} = useQuery(GET_COMMENTS, {
        variables: { id: postId },
        context: { headers: { 'authorization': `Bearer ${ localStorage.getItem('token') } `} },
        pollInterval: 200,
    });
    const [createComment] = useMutation(POST_COMMENT);

    /*function calculateCommentTime(time) {
        const commentTime = new Date(time);
        const now = new Date().getTime();

        const diff = now - commentTime.getTime() ;
        const year = Math.floor(diff / 1000 / 60 / 60 / 24 / 7 / 30 / 365);
        const month = Math.floor(diff / 1000 / 60 / 60 / 24 / 7 / 30);
        const week = Math.floor(diff / 1000 / 60 / 60 / 24 / 7);
        const days = Math.floor(diff / 1000 / 60 / 60 / 24);
        const hours = Math.floor(diff / 1000 / 60 / 60 );
        const minutes = Math.floor(diff / 1000 / 60 );
        const seconds = Math.floor(diff / 1000 );

        if(year >= 1) {
            return `${year}y`;
        }

        if(month >= 1) {
            return `${month}month`;
        }

        if(week >= 1) {
            return `${week}w`;
        }

        if(days >= 1) {
            return `${days}d`;
        }

        if(hours >= 1) {
            return `${hours}h`;
        }

        if(minutes >= 1) {
            return `${days}m`;
        }

        if(seconds >= 1) {
            return `${seconds}s`;
        }
    } */

    function sendComment() {
        createComment({variables: {id: postId, comment }});
        setComment('');
    }

    function sendCommentViaKey(e) {
        if(e.keyCode === 13) {
            createComment({variables: {id: postId, comment }});
            setComment('');
        }
        return;
    }

    /*function formatDate(date) {
        const splittedDate = date.split('-')
        const monthNumber = splittedDate[1];
        let month = "";
        switch(monthNumber) {
            case '01': 
                month = "Jan"
                break;
            case '02': 
                month = "Feb"
                break;
            case '03': 
                month = "Mar"
                break;
            case '04': 
                month = "Apr"
                break;
            case '05': 
                month = "May"
                break;
            case '06': 
                month = "Jun"
                break;
            case '07': 
                month = "Jul"
                break;
            case '08': 
                month = "Aug"
                break;
            case '09': 
                month = "Sep"
                break;
            case '10': 
                month = "Oct"
                break;
            case '11': 
                month = "Nov"
                break;
            case '12': 
                month = "Dec"
                break;
        }
        return `${splittedDate[0]}, ${month} ${splittedDate[2]}`;
    } */

    return (
        <div className="relative bg-l flex-1 flex flex-col rounded-r-lg p-4">
            <div className="flex flex-col pl-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        {userInfo?.getUserInfoById.avatar && !isImgError? (
                            <div className="w-12 h-12 rounded-full overflow-hidden">
                                <img 
                                    src={`${SERVER_PATH}images/profile/${userInfo?.getUserInfoById?.name}/${userInfo?.getUserInfoById?.avatar}`} alt="user avatar"
                                    className="rounded-full"
                                    onError={() => setIsImgError(true)}
                                />
                            </div>) : <i className="far fa-user-circle text-2xl"></i>}
                        <div className="flex flex-col">
                            <span className="sm:text-md lg:text-2xl text-d font-bold ml-2">{userInfo?.getUserInfoById.name}</span>
                            <span className="sm:text-xs lg:text-sm ml-2 text-dark-gray">@{userInfo?.getUserInfoById.name}</span>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <span className="font-bold mr-2">{hearts || 0}</span>
                        <i id="heart" className={` fas fa-heart text-lg text-r transform`}></i> 
                    </div>
                </div>

                <div className="p-4">
                    <p className="text-dark-gray lg:text-lg sm:text-sm">{description}</p>
                </div>
            </div>

            <div className="flex-1">
                <div className="ml-2 text-d font-bold sm:text-sm md:text-md">comments</div>
                <div className="h-auto max-h-52 overflow-auto px-4 relative m-2">
                    <div className="flex flex-col self-end lg:text-md sm:text-sm mb-2">
                        { data ?  data?.getComments.map((user, idx) => {
                            /*return <div key={idx}>under development</div>*/
                            return (
                            <div key={idx} className="rounded-md bg-light-gray p-2 mb-2">
                                <div className="flex items-center flex-wrap">
                                    <div>{'user?.user.avatar'}</div> 
                                    <div className="text-d font-bold mr-2">{'user?.user.name'}</div> 
                                    <span className="text-sm font-thin">{"formatDate(user.created_at.split('T')[0])"}</span> 
                                </div>
                                <div className="flex justify-between items-center flex-wrap">
                                    <p>{user?.comment}</p>
                                    <span className="text-sm font-thin">{"calculateCommentTime(user.created_at)"}</span>
                                </div>
                            </div>
                        )}) 

                        : (<div>
                                <div>no comments</div>
                                <div>under develpment</div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
            <div className="flex items-center">
                <input type="text" className="sm:text-sm md:text-md border-2 border-d w-full rounded-lg p-2" placeholder="write your comment" onKeyUp={(e) => sendCommentViaKey(e)} value={comment} onChange={(e) => setComment(e.target.value)}/>
                <button onClick={sendComment} className="sm:text-sm md:text-md ml-2 p-2 bg-facebook rounded-md text-l font-bold">send</button>
            </div>
        </div>
    );
};
