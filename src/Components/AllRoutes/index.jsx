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
                        <Redirect to="/app" />
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
                path="/app/posts"
                component={() =>
                    token ? <Feed posts={true} /> : <Redirect to="/login" />
                }
            />

            <Route
                exact
                path="/app"
                component={() =>
                    token ? <Feed feed={true} /> : <Redirect to="/login" />
                }
            />

            <Route
                exact
                path="/app/notifications"
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
                path="/app/explore"
                component={() =>
                    token ? <Feed explore={true} /> : <Redirect to="/login" />
                }
            />

            <Route
                exact
                path="/app/direct"
                component={() =>
                    token ? <Feed messages={true} /> : <Redirect to="/login" />
                }
            />

            <Route
                exact
                path="/app/settings"
                component={() =>
                    token ? <Feed settings={true} /> : <Redirect to="/login" />
                }
            />
        </>
    );
};
