/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getComment = /* GraphQL */ `
  query GetComment($id: Int!) {
    getComment(id: $id) {
      id
      content
      created_on
      tweet_id
      user_id
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments {
    listComments {
      id
      content
      created_on
      tweet_id
      user_id
    }
  }
`;
export const getFollow = /* GraphQL */ `
  query GetFollow($followee_id: String!) {
    getFollow(followee_id: $followee_id) {
      following_id
      followee_id
    }
  }
`;
export const listFollows = /* GraphQL */ `
  query ListFollows {
    listFollows {
      following_id
      followee_id
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($user_id: String!) {
    getLike(user_id: $user_id) {
      tweet_id
      user_id
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes {
    listLikes {
      tweet_id
      user_id
    }
  }
`;
export const getRetweet = /* GraphQL */ `
  query GetRetweet($user_id: String!) {
    getRetweet(user_id: $user_id) {
      created_on
      tweet_id
      user_id
    }
  }
`;
export const listRetweets = /* GraphQL */ `
  query ListRetweets {
    listRetweets {
      created_on
      tweet_id
      user_id
    }
  }
`;
export const getTweet = /* GraphQL */ `
  query GetTweet($id: Int!) {
    getTweet(id: $id) {
      id
      content
      created_on
      user_id
    }
  }
`;
export const listTweets = /* GraphQL */ `
  query ListTweets {
    listTweets {
      id
      content
      created_on
      user_id
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($username: String!) {
    getUser(username: $username) {
      username
      name
      email
      birth_date
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers {
    listUsers {
      username
      name
      email
      birth_date
    }
  }
`;
