import React from "react";

import { Field, useField } from "formik";

export const RadionBtn = ({ name, value, type, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            <div className="m-2 font-semibold">{value}: </div>
            <Field {...field} {...meta} name={name} value={value} type={type} />
        </>
    );
};
