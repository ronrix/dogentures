import React from "react";

import { Route, Redirect } from "react-router-dom";

import { Auth } from "../Authentication/index.jsx";
import { Feed } from "../Main/index.jsx";

export const AllRoutes = ({ token }) => {
    const dataFromSignUpForm = localStorage.getItem('auth');
    return (
        <>
            <Route
                exact
                path="/"
                component={() =>
                    !token ? (
                        <Redirect to="/login" />
                    ) : (
                        <Redirect to="/dogsfeed" />
                    )
                }
            />
            <Route
                path="/login"
                component={() =>
                    !token ? <Auth /> : <Redirect to="/dogsfeed" />
                }
            />
            <Route
                path="/signup"
                component={() =>
                    !token ? (
                        <Auth isRegister={true} />
                    ) : (
                        <Redirect to="/dogsfeed" />
                    )
                }
            />
            <Route
                path="/complete-profile"
                component={() =>
                    dataFromSignUpForm && !token? (
                        <Auth isRegister={true} completingProfile={true} />
                    ) : (
                        <Redirect to="/dogsfeed" />
                    )
                }
            />
            <Route
                exact
                path="/dogsfeed/posts"
                component={() =>
                    token ? <Feed posts={true} /> : <Redirect to="/login" />
                }
            />

            <Route
                exact
                path="/dogsfeed"
                component={() =>
                    token ? <Feed feed={true} /> : <Redirect to="/login" />
                }
            />

            <Route
                exact
                path="/dogsfeed/notifications"
                component={() =>
                    token ? (
                        <Feed notifications={true} />
                    ) : (
                        <Redirect to="/login" />
                    )
                }
            />

            <Route
                exact
                path="/dogsfeed/explore"
                component={() =>
                    token ? <Feed explore={true} /> : <Redirect to="/login" />
                }
            />

            <Route
                exact
                path="/dogsfeed/direct"
                component={() =>
                    token ? <Feed messages={true} /> : <Redirect to="/login" />
                }
            />

            <Route
                exact
                path="/dogsfeed/settings"
                component={() =>
                    token ? <Feed settings={true} /> : <Redirect to="/login" />
                }
            />
        </>
    );
};
