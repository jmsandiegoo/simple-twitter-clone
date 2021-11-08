/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateTweet = /* GraphQL */ `
  subscription OnCreateTweet {
    onCreateTweet {
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
export const onUpdateTweet = /* GraphQL */ `
  subscription OnUpdateTweet {
    onUpdateTweet {
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
export const onDeleteTweet = /* GraphQL */ `
  subscription OnDeleteTweet {
    onDeleteTweet {
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
export const onCreateFollow = /* GraphQL */ `
  subscription OnCreateFollow {
    onCreateFollow {
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
export const onUpdateFollow = /* GraphQL */ `
  subscription OnUpdateFollow {
    onUpdateFollow {
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
export const onDeleteFollow = /* GraphQL */ `
  subscription OnDeleteFollow {
    onDeleteFollow {
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
