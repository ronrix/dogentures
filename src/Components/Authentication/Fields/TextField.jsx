import React from "react";

import { ErrorMessage, Field, useField } from "formik";

export const TextField = ({
    label,
    placeholder,
    type,
    errors,
    classes,
    ...props
}) => {
    const [field, meta] = useField(props);

    const filled = field.value ? "bg-white" : "bg-gray-200 ";

    return (
        <div className={`flex flex-col relative ${classes}`}>
            <Field
                {...field}
                {...meta}
                placeholder={placeholder}
                type={type}
                className={`border rounded-lg p-2 mb-4  outline-none text-black placeholder-gray-500 placeholder-opacity-25 hover:ring-2 hover:ring-indigo-300 border-light-gray transition duration-200 ease-in-out ${filled}`}
            />
            <ErrorMessage name={field.name}>
                {(msg) => (
                    <div className="text-r text-xs italic absolute bottom-0">
                        {msg}
                    </div>
                )}
            </ErrorMessage>
        </div>
    );
};
