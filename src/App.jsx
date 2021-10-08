import React, { useState } from "react";

import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";

// All routes Component
import { AllRoutes } from "./Components/AllRoutes/index.jsx";

// context
import { NavContext } from "./Context/context";
import { Data } from "./Context/context";
import { gql, useQuery } from "@apollo/client";

const GET_POSTS = gql`
    query GetAllPosts {
        getAllPosts {
            id
            hearts
            description
            image
            userId
        }
    }
`;

function App() {
    const [activeNav, setNavActive] = useState("feed");
    const [token] = useState(() => localStorage.getItem("token"));
    const authenticatedStyle = token
        ? "w-full"
        : " flex md:h-screen justify-center items-center";

    // fetch the data
    const { data } = useQuery(GET_POSTS, {
        context: {
            headers: {
                authorization: `Bearer ${JSON.parse(
                    JSON.stringify(localStorage.getItem("token"))
                )} `,
            },
        },
        pollInterval: 200,
    });

    return (
        <div className={`${authenticatedStyle}`}>
            <NavContext.Provider value={{ activeNav, setNavActive }}>
                <Data.Provider value={{ data }}>
                    <Router>
                        <Switch>
                            <AllRoutes token={token} />
                        </Switch>
                    </Router>
                </Data.Provider>
            </NavContext.Provider>
        </div>
    );
}

export default App;
