import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import p1 from "../../assets/preview 1.png";

import { TextField } from "./Fields/TextField.jsx";
import { ReactComponent as Loading } from "../../assets/loading.svg";
import { useField, Field } from "formik";

export const Signup = ({ loading, error, ...props }) => {
    const [field, meta] = useField(props);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleValidationBeforeNext = () => {
        setErrorMessage("");
        const signupValue = meta.value.email + ":" + meta.value.password;
        signupValue.trim();
        // storing signup value to localStorage and send it to the server after done signing up
        localStorage.setItem("auth", JSON.stringify(signupValue));
    };

    useEffect(() => {
        // check password confirmation
        if(confirmPassword !== field.value.password) {
            console.log(confirmPassword, field.value.password);
            setErrorMessage("password not match");
        } else {
            setErrorMessage("");
        }
    }, [confirmPassword])

    console.log(confirmPassword);

    return (
        <div className={`my-6 mx-24 w-3/5`}>
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
                />
                <TextField
                    placeholder="password"
                    name="password"
                    type="password"
                    id="password"
                />

                <Field
                    placeholder="confirm password"
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    className={`w-full border rounded-lg p-2 mb-4  outline-none text-black placeholder-gray-500 placeholder-opacity-25 hover:ring-2 hover:ring-indigo-300 border-light-gray transition duration-200 ease-in-out`}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <span className="text-r">{errorMessage}</span>

                <button
                    type="button"
                    onClick={handleValidationBeforeNext}
                    className={`${(!field.value.email || !field.value.password || errorMessage) ? 'pointer-events-none opacity-75': ''} mt-2 bg-lbtn w-full text-l p-2 bg-blue-500 rounded-md text-white hover:opacity-50 transition duration-300 ease-in-out font-semibold`}
                >
                    { field.value.email && field.value.password ? (
                            <Link to="/complete-profile">
                                {loading ? <Loading /> : <p>next</p>}
                            </Link>
                        ) : <p>next</p> 
                    }
                </button>
                <div className="text-r text-sm text-center">{error}</div>

                <div className="h-1 w-full bg-light-gray mt-4"></div>
                <div className="text-center mt-4 w-full flex flex-col items-center">
                    <div className="text-2xl inline-block">don't have an account yet?</div>
                    <Link
                        to="/login"
                        className="inline-block text-link text-sm hover:underline mt-2 w-40"
                    >
                        login for dogeventures
                    </Link>
                </div>
            </div>
        </div>
    );
};
