import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./shared/GlobalStyle";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { theme } from "./shared/Theme";
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



/* Amplify Params - DO NOT EDIT
	API_SIMPLETWITTERCLONE_GRAPHQLAPIENDPOINTOUTPUT
	API_SIMPLETWITTERCLONE_GRAPHQLAPIIDOUTPUT
	API_SIMPLETWITTERCLONE_GRAPHQLAPIKEYOUTPUT
	AUTH_SIMPLETWITTERCLONED8CE95B6_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */
/*
const axios = require('axios');
const gql = require('graphql-tag');
const  graphql = require('graphql');
const { print } = graphql;

const createUser = gql`
mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
        username
        name
        email
        birth_date
    }
}
`

exports.handler = (event, context, callback) => {
    console.log(event);
    const { username, email, name, birthdate } = event.request.userAttributes;

    // Request graphql mutation
    axios({
        url: process.env.API_SIMPLETWITTERCLONE_GRAPHQLAPIENDPOINTOUTPUT,
        method: 'post',
        headers: {
          'x-api-key': process.env.API_SIMPLETWITTERCLONE_GRAPHQLAPIKEYOUTPUT
        },
        data: {
          query: print(createUser),
          variables: {
            input: {
              username,
              email,
              name,
              birthdate
            }
          }
        }
    })
    .then(() => {
        callback(null, event)
    })
    .catch((error) => {
        callback(Error(error));
    })
}
*/