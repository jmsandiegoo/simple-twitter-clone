import React, { useState, useEffect } from "react";
import { MainContentWrapper, StyledHeader } from "../style";
import { Tweet } from "../Tweet";
import { CreateTweet } from "./CreateTweet";
import { API } from 'aws-amplify';
import * as queries from "../../../graphql/queries";

function Home() {
  const [ tweets, setTweets ] = useState([{
    id: 1,
    content: 'Alyssa\'s First Tweet!',
    createdAt: '2021-10-28T21:33:41.453Z',
    user: {
      username: 'alyssxv',
      name: 'Alyssa Verdadero',
    }
  }, {
    id: 2, 
    content: 'Hello Twitter Clone!',
    createdAt: '2021-10-28T21:33:41.453Z',
    user: {
      username: 'martinxz',
      name: 'Martin San Diego'
    }
  }, {
    id: 3,
    content: 'Going to starbucks today :D',
    user: {
      username: 'rickyyy',
      name: 'Rick & Morty'
    }
  }]);

  const fetchFeedTweets = async() => {
    try {
      const userRes = await API.graphql({query: queries.getUser, variables: { username: "nautxz" }});
      console.log(userRes);
      if (userRes.error) {
        throw new Error("There's a problem with the getUser query", {cause: userRes.error})
      }
      const filter = {or: [{username: {eq: "nautxz"}}, {username: {eq: "alyssxv"}}, {username: {eq: "martinxz"}}]};

      const feedTweetsRes = await API.graphql({query: queries.listTweets, variables: {filter}});
      console.log(feedTweetsRes);

      if (feedTweetsRes.error) {
        throw new Error("There's a problem with the listTweets query", {cause: userRes.error});
      } 

      setTweets(feedTweetsRes.data.listTweets.items);

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchFeedTweets();
    // return () => {
    // }
  }, [])
  
  const createTweetHandler = (newTweet) => {
    console.log('Appending new tweet into state', newTweet); 
    setTweets((prevTweets) => {
      return [newTweet, ...prevTweets];
    })
  }

  return (
    <MainContentWrapper>
      <StyledHeader>
        <h3>Home</h3>
      </StyledHeader>
    <CreateTweet onCreateTweet={createTweetHandler}/>
      { tweets.map((tweet) => {
        return <Tweet key={tweet.id} tweet={tweet} />
      }) }
    </MainContentWrapper>
  );
}

export default Home;
