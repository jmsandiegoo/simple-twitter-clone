/* Amplify Params - DO NOT EDIT
	API_SIMPLETWITTERCLONE_GRAPHQLAPIENDPOINTOUTPUT
	API_SIMPLETWITTERCLONE_GRAPHQLAPIIDOUTPUT
	API_SIMPLETWITTERCLONE_GRAPHQLAPIKEYOUTPUT
	AUTH_SIMPLETWITTERCLONED8CE95B6_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const axios = require("axios");
const gql = require("graphql-tag");
const graphql = require("graphql");
const { print } = graphql;

const createUser = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      username
      name
      email
      birthdate
    }
  }
`;

exports.handler = async (event) => {
  console.log(event);
  const { email, name, birthdate } = event.request.userAttributes;

  // Request graphql mutation
  try {
    const result = await axios({
      url: process.env.API_SIMPLETWITTERCLONE_GRAPHQLAPIENDPOINTOUTPUT,
      method: "post",
      headers: {
        "x-api-key": process.env.API_SIMPLETWITTERCLONE_GRAPHQLAPIKEYOUTPUT,
      },
      data: {
        query: print(createUser),
        variables: {
          input: {
            username: event.userName,
            email,
            name,
            birthdate,
          },
        },
      },
    });
    if (result.data.error) {
      console.log("Mutation related error occured:", result.data.error);
    } else {
      console.log("Mutation success!", result.data.data);
    }

    return event;
  } catch (error) {
    console.log("Error executing axios request: " + error.message);
    throw error;
  }
};
