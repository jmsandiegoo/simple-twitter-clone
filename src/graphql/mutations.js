/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteComment = /* GraphQL */ `
  mutation DeleteComment($id: Int!) {
    deleteComment(id: $id) {
      id
      content
      created_on
      tweet_id
      user_id
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment($createCommentInput: CreateCommentInput!) {
    createComment(createCommentInput: $createCommentInput) {
      id
      content
      created_on
      tweet_id
      user_id
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment($updateCommentInput: UpdateCommentInput!) {
    updateComment(updateCommentInput: $updateCommentInput) {
      id
      content
      created_on
      tweet_id
      user_id
    }
  }
`;
export const deleteFollow = /* GraphQL */ `
  mutation DeleteFollow($followee_id: String!) {
    deleteFollow(followee_id: $followee_id) {
      following_id
      followee_id
    }
  }
`;
export const createFollow = /* GraphQL */ `
  mutation CreateFollow($createFollowInput: CreateFollowInput!) {
    createFollow(createFollowInput: $createFollowInput) {
      following_id
      followee_id
    }
  }
`;
export const updateFollow = /* GraphQL */ `
  mutation UpdateFollow($updateFollowInput: UpdateFollowInput!) {
    updateFollow(updateFollowInput: $updateFollowInput) {
      following_id
      followee_id
    }
  }
`;
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike($user_id: String!) {
    deleteLike(user_id: $user_id) {
      tweet_id
      user_id
    }
  }
`;
export const createLike = /* GraphQL */ `
  mutation CreateLike($createLikeInput: CreateLikeInput!) {
    createLike(createLikeInput: $createLikeInput) {
      tweet_id
      user_id
    }
  }
`;
export const updateLike = /* GraphQL */ `
  mutation UpdateLike($updateLikeInput: UpdateLikeInput!) {
    updateLike(updateLikeInput: $updateLikeInput) {
      tweet_id
      user_id
    }
  }
`;
export const deleteRetweet = /* GraphQL */ `
  mutation DeleteRetweet($user_id: String!) {
    deleteRetweet(user_id: $user_id) {
      created_on
      tweet_id
      user_id
    }
  }
`;
export const createRetweet = /* GraphQL */ `
  mutation CreateRetweet($createRetweetInput: CreateRetweetInput!) {
    createRetweet(createRetweetInput: $createRetweetInput) {
      created_on
      tweet_id
      user_id
    }
  }
`;
export const updateRetweet = /* GraphQL */ `
  mutation UpdateRetweet($updateRetweetInput: UpdateRetweetInput!) {
    updateRetweet(updateRetweetInput: $updateRetweetInput) {
      created_on
      tweet_id
      user_id
    }
  }
`;
export const deleteTweet = /* GraphQL */ `
  mutation DeleteTweet($id: Int!) {
    deleteTweet(id: $id) {
      id
      content
      created_on
      user_id
    }
  }
`;
export const createTweet = /* GraphQL */ `
  mutation CreateTweet($createTweetInput: CreateTweetInput!) {
    createTweet(createTweetInput: $createTweetInput) {
      id
      content
      created_on
      user_id
    }
  }
`;
export const updateTweet = /* GraphQL */ `
  mutation UpdateTweet($updateTweetInput: UpdateTweetInput!) {
    updateTweet(updateTweetInput: $updateTweetInput) {
      id
      content
      created_on
      user_id
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser($username: String!) {
    deleteUser(username: $username) {
      username
      name
      email
      birth_date
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      username
      name
      email
      birth_date
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      username
      name
      email
      birth_date
    }
  }
`;
