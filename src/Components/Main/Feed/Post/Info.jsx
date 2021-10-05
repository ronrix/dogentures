import React, { useState }  from "react";
import { useQuery, gql, useSubscription, useMutation } from '@apollo/client';

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

export const Info = ({userInfo, description, postId}) => {
    const [comment, setComment] = useState("");

    const {data} = useQuery(GET_COMMENTS, {
        variables: { id: postId },
        //pollInterval: 1,
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
        <div className="bg-l flex-1 flex flex-col rounded-lg p-4 relative bottom-0">
            <div className="flex flex-col pl-4">
                <div className="flex space-around items-center">
                    {userInfo?.getUserInfoById.avatar ? (
                        <img 
                            src={`http://localhost:4000/images/profile/${userInfo?.getUserInfoById?.name}/${userInfo?.getUserInfoById?.avatar}`} 
                            alt="user avatar"
                            className="w-12 rounded-full"
                    />) : <i class="far fa-user-circle text-2xl"></i>}
                    <div className="flex flex-col">
                        <span className="text-2xl text-d font-bold ml-2">{userInfo?.getUserInfoById.name}</span>
                        <span className="text-sm ml-2 text-dark-gray">@{userInfo?.getUserInfoById.name}</span>
                    </div>
                </div>

                <div className="p-4">
                    <p className="text-dark-gray text-lg">{description}</p>
                </div>
            </div>

            <div className="flex-1">
                <div className="ml-2 text-d font-bold">comments</div>
                <div className="h-80 overflow-auto px-4 relative">
                    <div className="flex flex-col self-end">
                        { data ?  data?.getComments.map((user, idx) => {
                            return <div>under development</div>
                            /*return (
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
                        )*/}) 
                        : (<div>
                                <div>no comments</div>
                                <div>under develpment</div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
            <div className="flex items-center">
                <input type="text" className="border-2 border-d w-full rounded-lg p-2" placeholder="write your comment" onKeyUp={(e) => sendCommentViaKey(e)} value={comment} onChange={(e) => setComment(e.target.value)}/>
                <button onClick={sendComment} className="ml-2 p-2 bg-facebook rounded-md text-l font-bold">send</button>
            </div>
        </div>
    );
};
