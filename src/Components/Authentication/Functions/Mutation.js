import { gql } from "@apollo/client";

export const LOGIN = gql`
    mutation LoginMutation($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            accessToken
            msg
            ok
        }
    }
`;

export const REGISTER = gql`
    mutation RegisterMutation(
        $email: String!
        $password: String!
        $name: String!
        $bdate: DateTime!
        $file: Upload!
    ) {
        register(
            email: $email
            password: $password
            name: $name
            bdate: $bdate
            file: $file
        ) {
            accessToken
            ok
        }
    }
`;
