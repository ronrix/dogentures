import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { createUploadLink } from "apollo-upload-client";
import {SERVER_PATH} from './config/index.js';

const httpLink = createHttpLink({uri: 'http://localhost:4000/graphql', withCredentials: true});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

/*const client = new ApolloClient({
    cache: new InMemoryCache(),
    fetchOptions: {
        credentials: 'include',
        mode: 'no-cors',
    },
    link: authLink.concat(httpLink),
}); */


const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink({
    uri: `${SERVER_PATH}graphql`,
  })
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
