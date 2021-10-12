import React, { useState } from "react";

import { Formik, Form } from "formik";
import { useMutation } from "@apollo/client";

import { Leftside } from "./Leftside.jsx";
import { LOGIN, REGISTER } from "./Functions/Mutation.js";
import {
    loginValidation,
    registerValidation,
} from "./Functions/validationSchema";

import { Login } from "./Login.jsx";
import { Signup } from "./Signup.jsx";
import { CompleteProfile } from "./CompleteProfile.jsx";

const handleOnSubmit = async (
    values,
    fetchFn,
    setError,
    isSubmitting,
    isRegister
) => {
    document.title = "loading";
    if (isSubmitting) document.body.style.cursor = "wait";

    // login | signup
    if (isRegister) {
        const { data } = await fetchFn({
            variables: {
                email: values.email,
                file: values.file,
                password: values.password,
                name: values.name,
                bdate: values.bdate,
            },
        });
        console.log(data);
        if (data.register.accessToken) {
            localStorage.setItem(
                "token",
                data?.register?.accessToken
            );
            document.body.style.cursor = "default";
            window.location.href = "/app";
        }

        // remove some data stored in LS
        localStorage.removeItem("auth");

        setError(data.signup.msg);
    } else {
        const { data } = await fetchFn({
            variables: { email: values.email, password: values.password },
        });

        if (data.login.accessToken) {
            localStorage.setItem(
                "token",
                data.login.accessToken
            );
            document.body.style.cursor = "default";
            window.location.href = "/app";
        }

        setError(data.login.msg);
    }
    document.body.style.cursor = "default";
};

export const Auth = ({ isRegister, completingProfile }) => {
    const [login, { loading: lloading }] = useMutation(LOGIN);
    const [signup, { loading: sloading }] = useMutation(REGISTER);

    const fetchFn = isRegister && completingProfile ? signup : login;

    const validationSchema = isRegister ? registerValidation : loginValidation;

    const initialValues =
        isRegister && isRegister
            ? { email: "", password: "", name: "", bdate: "", file: "" }
            : { email: "", password: "" };

    const [error, setError] = useState("");

    return (
        <div className={`flex h-screen w-screen sm:flex-col md:flex-col lg:flex-row justify-center items-center ${lloading || sloading ? "cursor-wait": ''}`}>
            {!completingProfile ? <Leftside /> : null}
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                validateOnBlur={false}
                onSubmit={(values, isSubmitting) =>
                    handleOnSubmit(
                        values,
                        fetchFn,
                        setError,
                        isSubmitting,
                        isRegister
                    )
                }
            >
                {({ values, handleChange, setFieldValue }) => (
                    <Form className={`flex-1 flex flex-col justify-center items-center box-border sm:w-full md:w-4/5 transition`}>
                        {isRegister && completingProfile ? (
                            <CompleteProfile setFieldValue={setFieldValue} values={values} handleChange={handleChange} />
                        ) : isRegister ? (
                            <Signup loading={sloading} error={error} />
                        ) : (
                            <Login loading={lloading} error={error} />
                        )}
                    </Form>
                )}
            </Formik>
        </div>
    );
};
