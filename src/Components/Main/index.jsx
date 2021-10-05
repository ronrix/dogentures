import React, { useEffect, useState } from "react";

import { SideHeader } from "../Header/index";
import { Posts } from "./Posts/index.jsx";
import { DogosFeed } from "./Feed/index.jsx";
import { Explore } from "./Explore/index.jsx";
import { DirectMessages } from "./Direct/index.jsx";
import { Settings } from "./Settings/index.jsx";
import { Notifications } from "./Notifications/index.jsx";
import { gql, useQuery } from "@apollo/client";

import { ReactComponent as Loading } from "../../assets/loading.svg";

const VERIFY = gql`
    query VerifyToken($token: String!) {
        verifyToken(token: $token) {
            ok
        }
    }
`;

export const Feed = (props) => {
    const [token] = useState(() =>
        JSON.stringify(localStorage.getItem("token"))
    );
    const { loading, data, error } = useQuery(VERIFY, {
        variables: { token: JSON.parse(token) },
        context: { headers: { 'authorization': `Bearer ${JSON.parse(token)}`} }
    });

    useEffect(() => {
        if(error || data?.verifyToken?.ok === false) {
            localStorage.removeItem('token');
            window.location.href = "/login";
        }
    }, [token])

    return (
        <>
            {loading ? (
                <Loading />
            ) : !error && data?.verifyToken?.ok ? (
                <div className="flex">
                    <SideHeader />
                    {props.posts && <Posts />}
                    {props.feed && <DogosFeed />}
                    {props.explore && <Explore />}
                    {props.messages && <DirectMessages />}
                    {props.settings && <Settings />}
                    {props.notifications && <Notifications />}
                </div>
            ) : (
                <div>{JSON.stringify(error.message)}</div>
            )}
        </>
    );
};
