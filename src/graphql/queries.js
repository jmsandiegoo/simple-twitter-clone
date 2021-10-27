/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($username: String!) {
    getUser(username: $username) {
      username
      email
      name
      birthdate
      createdAt
    }
  }
`;
export const getAllUser = /* GraphQL */ `
  query GetAllUser {
    getAllUser {
      username
      email
      name
      birthdate
      createdAt
    }
  }
`;
