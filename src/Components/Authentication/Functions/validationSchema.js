import * as yup from "yup";

export const loginValidation = yup.object({
    email: yup.string().required("email is required to login"),
    password: yup.string().required("password is required to login"),
});

export const registerValidation = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
    name: yup.string().required(),
    age: yup.number(),
});
