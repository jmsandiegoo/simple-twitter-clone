/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($username: String!) {
    getUser(username: $username) {
      username
      email
      name
      birthdate
      tweets {
        items {
          id
          username
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      followers {
        items {
          id
          following
          followee
          createdAt
          updatedAt
        }
        nextToken
      }
      following {
        items {
          id
          following
          followee
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $username: String
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      username: $username
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        username
        email
        name
        birthdate
        tweets {
          nextToken
        }
        followers {
          nextToken
        }
        following {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTweet = /* GraphQL */ `
  query GetTweet($id: ID!) {
    getTweet(id: $id) {
      id
      username
      content
      createdAt
      user {
        username
        email
        name
        birthdate
        tweets {
          nextToken
        }
        followers {
          nextToken
        }
        following {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const listTweets = /* GraphQL */ `
  query ListTweets(
    $filter: ModelTweetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTweets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        content
        createdAt
        user {
          username
          email
          name
          birthdate
          createdAt
          updatedAt
        }
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFollow = /* GraphQL */ `
  query GetFollow($id: ID!) {
    getFollow(id: $id) {
      id
      following
      followee
      followingUser {
        username
        email
        name
        birthdate
        tweets {
          nextToken
        }
        followers {
          nextToken
        }
        following {
          nextToken
        }
        createdAt
        updatedAt
      }
      followeeUser {
        username
        email
        name
        birthdate
        tweets {
          nextToken
        }
        followers {
          nextToken
        }
        following {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listFollows = /* GraphQL */ `
  query ListFollows(
    $filter: ModelFollowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollows(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        following
        followee
        followingUser {
          username
          email
          name
          birthdate
          createdAt
          updatedAt
        }
        followeeUser {
          username
          email
          name
          birthdate
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const byUserByDate = /* GraphQL */ `
  query ByUserByDate(
    $username: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTweetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byUserByDate(
      username: $username
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        username
        content
        createdAt
        user {
          username
          email
          name
          birthdate
          createdAt
          updatedAt
        }
        updatedAt
      }
      nextToken
    }
  }
`;
