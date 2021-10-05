import React from "react";

import { Link } from "react-router-dom";
import p1 from "../../assets/preview 1.png";

import { TextField } from "./Fields/TextField.jsx";
import { ReactComponent as Loading } from "../../assets/loading.svg";
import { useField } from 'formik';

export const Login = ({ loading, error, ...props }) => {
    const [field] = useField(props);

    return (
        <div className={`my-6 mx-24 ${loading ? "cursor-wait" : ""} w-3/5 `}>
            <div className="flex flex-col items-center">
                <img src={p1} alt="cute dog" className="w-20 transition" />
                <h1 className="font-mono font-bold text-4xl text-center w-full">
                    dogentures
                </h1>
            </div>
            <div className="flex flex-col ">
                <button className="bg-google p-2 text-l rounded-md mt-2 hover:opacity-50 transition duration-300 ease-in-out">
                    sign in with google
                </button>
                <button className="bg-facebook p-2 text-l rounded-md mt-2 hover:opacity-50 transition duration-300 ease-in-out">
                    sign in with facebook
                </button>
            </div>
            <div className="h-1 w-full flex items-center mt-8">
                <div className="h-1 flex-1 bg-light-gray"></div>
                <div className="px-2">OR</div>
                <div className="h-1 flex-1 bg-light-gray"></div>
            </div>
            <div className="mt-11">
                <TextField
                    placeholder="email"
                    name="email"
                    type="text"
                    id="email"
                    label="email"
                />
                <TextField
                    placeholder="password"
                    name="password"
                    type="password"
                    id="password"
                    label="password"
                />
                <Link
                    to="/forgot-password"
                    className="text-link text-sm text-center hover:underline"
                >
                    forgot password?
                </Link>
                <button
                    type="submit"
                    className={`${!field.value.email || !field.value.password ? 'pointer-events-none opacity-75': ''} mt-2 bg-lbtn w-full text-l p-2 bg-blue-500 rounded-md text-white hover:opacity-50 transition duration-300 ease-in-out font-semibold`}
                >
                    {loading ? <Loading /> : <p>login</p>}
                </button>
                <div className="text-r text-sm text-center ">{error}</div>

                <div className="h-1 w-full bg-light-gray mt-4"></div>
                <div className="text-center mt-4 w-full flex flex-col items-center">
                    <div className="text-2xl ">don't have an account yet?</div>
                    <Link
                        to="/signup"
                        className="text-link text-sm text-center hover:underline mt-2 w-40 "
                    >
                        sign up for dogeventures
                    </Link>
                </div>
            </div>
        </div>
    );
};
