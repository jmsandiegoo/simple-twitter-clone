/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      content
      created_on
      tweet_id
      user_id
    }
  }
`;
export const onCreateFollow = /* GraphQL */ `
  subscription OnCreateFollow {
    onCreateFollow {
      following_id
      followee_id
    }
  }
`;
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike {
    onCreateLike {
      tweet_id
      user_id
    }
  }
`;
export const onCreateRetweet = /* GraphQL */ `
  subscription OnCreateRetweet {
    onCreateRetweet {
      created_on
      tweet_id
      user_id
    }
  }
`;
export const onCreateTweet = /* GraphQL */ `
  subscription OnCreateTweet {
    onCreateTweet {
      id
      content
      created_on
      user_id
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      username
      name
      email
      birth_date
    }
  }
`;
