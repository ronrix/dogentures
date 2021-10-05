import React, { useRef, useState } from "react";
import { Field, useField } from "formik";
import photo from "../../assets/photo-icon 1.png";

export const CompleteProfile = ({ setFieldValue, values, handleChange, ...props }) => {
    const [meta] = useField(props);

    const fileRef = useRef(null);

    const handleFile = () => {
        fileRef.current.click();
    };

    const dataFromSignUpForm = useState(() =>
        JSON.parse(localStorage.getItem("auth"))
    );
    meta.value.email = dataFromSignUpForm[0].split(":")[0];
    meta.value.password = dataFromSignUpForm[0].split(":")[1];

    return (
        <div className="w-screen p-28">
            <div className="flex justify-around sm:flex-col md:flex-row">
                <div className="flex flex-col ">
                    <div className="text-2xl font-medium mb-12 relative">
                        <span>Set up your profile</span>
                        <div className="absolute w-10 h-2 bg-link rounded-full"></div>
                    </div>
                    <Field type="hidden" name="email" />
                    <Field type="hidden" name="password" />
                    <Field
                        placeholder="@username"
                        type="text"
                        name="name"
                        className={
                            "bg-light-gray border-ld p-2 rounded-full hover:ring-2 px-4 outline-none"
                        }
                    />
                    <div className="flex flex-col mt-4">
                        <span className="pl-2"><i class="fas fa-birthday-cake pr-2"></i>birth date</span>
                        <input
                            type="date"
                            name="bdate"
                            value={values.bdate}
                            onChange={handleChange}
                            className={
                                "bg-light-gray border-ld p-2 rounded-full  hover:ring-2 px-4 outline-none"
                            }
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <input
                        ref={fileRef}
                        type="file"
                        name="file"
                        className={"invisible"}
                        onChange={(e) =>
                            setFieldValue("file", e.target.files[0])
                        }
                    />
                    <div className="rounded-full w-52 h-52 overflow-hidden bg-center relative">
                        <img
                            src={
                                meta.value.file
                                    ? URL.createObjectURL(meta.value.file)
                                    : photo
                            }
                            alt="the avatar"
                            className="bg-center absolute w-full bg-center"
                        />
                    </div>
                    <div
                        onClick={handleFile}
                        className="text-center bg-ld text-l mt-2 rounded-lg p-2 text-sm cursor-pointer hover:opacity-75"
                    >
                        add photo
                    </div>
                </div>
            </div>
            <div className="flex justify-around mt-10 items-center">
                <div>This will be display of your profile</div>
                <button
                    type="submit"
                    className="bg-r p-2 font-medium text-l rounded-xl hover:opacity-75"
                    onClick={() => console.log('you clicked me')}
                >
                    save
                </button>
            </div>
        </div>
    );
};
