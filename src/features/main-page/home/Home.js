import React, { useState, useEffect } from "react";
import { MainContentWrapper, StyledHeader } from "../style";
import { Tweet } from "../Tweet";
import { CreateTweet } from "./CreateTweet";
import { API } from "aws-amplify";
import * as queries from "../../../graphql/queries";
import * as mutations from "../../../graphql/mutations";

function Home() {
  const [tweets, setTweets] = useState([]);
  const [refresh, setRefresh] = useState(true);

  const fetchFeedTweets = async () => {
    try {
      const userRes = await API.graphql({
        query: queries.getUser,
        variables: { username: "nautxz" },
      });
      console.log(userRes);
      if (userRes.error) {
        throw new Error("There's a problem with the getUser query", {
          cause: userRes.error,
        });
      }
      const filter = {
        or: [
          { username: { eq: "nautxz" } },
          { username: { eq: "alyssxv" } },
          { username: { eq: "martinxz" } },
        ],
      };

      const feedTweetsRes = await API.graphql({
        query: queries.listTweets,
        variables: { filter },
      });
      console.log(feedTweetsRes);

      if (feedTweetsRes.error) {
        throw new Error("There's a problem with the listTweets query", {
          cause: userRes.error,
        });
      }

      setTweets(feedTweetsRes.data.listTweets.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (refresh) {
      fetchFeedTweets();
      setRefresh(false);
    }
  }, [refresh]);

  const createTweetHandler = async (newTweet) => {
    console.log("Creating new tweet.....", newTweet);
    try {
      const newTweetRes = await API.graphql({
        query: mutations.createTweet,
        variables: { input: newTweet },
      });
      if (newTweetRes.error) {
        throw new Error({ cause: newTweetRes.error });
      }
      setRefresh(true);
    } catch (error) {
      console.log("Error creating tweet");
      console.error(error);
    }
  };

  return (
    <MainContentWrapper>
      <StyledHeader>
        <h3>Home</h3>
      </StyledHeader>
      <CreateTweet onCreateTweet={createTweetHandler} />
      {tweets.map((tweet) => {
        return <Tweet key={tweet.id} tweet={tweet} />;
      })}
    </MainContentWrapper>
  );
}

export default Home;
