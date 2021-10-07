import { Formik, Form, Field } from "formik";
import React, { useState, useRef } from "react";

import { gql, useQuery, useMutation } from "@apollo/client";
import { ReactComponent as Loading } from "../../../../assets/loading.svg";

const GET_INFO = gql`
    query GetInfo { getInfo {
            avatar
            name
            posts
        }
    }
`; 

const ADD_POST = gql`
    mutation AddPost($file: Upload!, $name: String!, $description: String!) {
        createPost(file: $file, name: $name, description: $description)
    }

`;

export const AddNewPost = ({ isOpen, setIsNewPostFieldShow }) => {

   const { data } = useQuery(GET_INFO, 
        { context: { headers: { 'authorization': `Bearer ${JSON.parse(JSON.stringify(localStorage.getItem('token')))} `} }}
   );

    const [createPost, {error}] = useMutation(ADD_POST,
        { context: { headers: { 'authorization': `Bearer ${JSON.parse(JSON.stringify(localStorage.getItem('token')))} `} }}
    );
    const [loading, setLoading] = useState(false);
    const [successMsgOn, setSuccessMsgOn] = useState(false);

    const fileRef = useRef(null);

    // calling the click event of the input file element
    const browseFile = () => {
        fileRef.current.click();
    };

    // submit the post
    const handleSubmit = async (values, actions) => {
        if(!values.desc || !values.file) return;
        setLoading(true);
        if(values.desc && values.file) {
            await createPost({
                variables: { file: values.file, name: data?.getInfo.name, description: values.desc}
            });
        } 

        // after posting
        setLoading(false);
        actions.setSubmitting(false);

        values.desc = '';
        values.file = null;
        fileRef.current.value = null;
        
        // toggle success message in one second
        setSuccessMsgOn(true);
        setTimeout(() => setSuccessMsgOn(false), 1000);
    };



    if (isOpen) {
        return (
            <Formik
                initialValues={{ desc: "", file: "" }}
                onSubmit={(values, actions) => handleSubmit(values, actions)}
            >{
            ({values, setFieldValue, handleChange, handleBlur}) => ( 
                <Form className="mt-4">
                    <div className="text-sm text-login">add description</div>
                    <textarea
                        className="w-full p-2 tracking-wide outline-none border-none"
                        name="desc"
                        value={values.desc}
                        onChange={handleChange}
                        placeholder={"write down your thoughts"}
                    ></textarea>
                    <div className="flex items-center mt-2 rounded-r-lg">
                        <span className="pr-2 text-sm text-login">
                            add your photo
                        </span>
                        <button
                            onClick={browseFile}
                            className="px-2 text-ld border-2 hover:bg-ld hover:text-l"
                        >
                            click
                        </button>
                            <img src={values.file ? URL.createObjectURL(values.file) : null} className="w-12 pl-2" />
                        <input
                            type="file"
                            name="file"
                            className="invisible"
                            onBlur={handleBlur}
                            ref={fileRef}
                            onChange={(e) => setFieldValue('file', e.target.files[0]) }
                        />
                    </div>
                    <div className="mt-4 flex">
                        <button
                            type="submit"
                            className="bg-ld text-l font-bold p-2 rounded-lg hover:bg-opacity-75 "
                        >
                            post
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsNewPostFieldShow(false)}
                            className=" text-ld font-bold p-2 rounded-lg hover:text-opacity-75 ml-4"
                        >
                            cancel
                        </button>
                    </div>
                    { (loading) && (
                        <div className="w-full bg-lg p-2 font-bold mt-2 shadow-lg text-d flex justify-center items-center">
                            <div>loading</div>
                            <div>
                                <Loading className="text-lg rounded-full"/> 
                            </div> 
                        </div>
                    )}
                     { (successMsgOn) && (
                        <div className={`w-full text-center bg-facebook p-2 font-bold mt-2 shadow-lg text-l`}>
                            <p>posted successfully</p>
                        </div>
                    )}
                </Form>
            )}
            </Formik>
        );
    }
    return null;
};
