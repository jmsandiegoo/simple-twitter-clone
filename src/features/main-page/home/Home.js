import React from "react";
import { MainContentWrapper, StyledHeader } from "../style";
import { CreateTweet } from "./CreateTweet";

function Home() {
  return (
    <MainContentWrapper>
      <StyledHeader>
        <h3>Home</h3>
      </StyledHeader>
      <CreateTweet />
    </MainContentWrapper>
  );
}

export default Home;
