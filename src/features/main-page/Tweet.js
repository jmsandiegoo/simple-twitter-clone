import React from 'react';
import styled from 'styled-components/macro';
import avatarImg from "../../assets/images/avatar_placeholder.jpg";
import { InlineButtonsWrapper, MainContentWrapper, StyledAvatar, StyledText, StyledName } from './style';

// test
import { Logo } from '../../shared/component/Icons';
import { StyledSmall } from '../../shared/Small.styled';

const TweetWrapper = styled(MainContentWrapper)`
  padding: 10px 20px;
  border-width: 1px 0 1px 0;
  grid-gap: 5px 20px;
  display: grid;
  grid-template-columns: min-content 1fr;

  &::nth-of-type(n+1) {
    border-width: 0 0 1px 0;
  }
`;

const StyledTweetContentName = styled(StyledName)`
  display: inline-block;
  padding: 0 5px 0 0;
`

const StyledTweetText = styled(StyledText)`
  white-space: pre-wrap;
`

const TweetInlineButtonsWrapper = styled(InlineButtonsWrapper)`
  grid-column: 2;
  max-width: 400px;
`

export function Tweet({tweet}) {

  const formatTime = () => {

  }

  return (
    <TweetWrapper>
      <StyledAvatar src={`${avatarImg}`}/>
      <div>
        <StyledTweetContentName>{tweet.user.name}</StyledTweetContentName>
        <StyledSmall>@{tweet.user.username} · Date</StyledSmall>
        <StyledSmall></StyledSmall>
        <StyledTweetText>{tweet.content}</StyledTweetText>
      </div>
      <TweetInlineButtonsWrapper>
        <Logo width="15px"/>
        <Logo width="15px"/>
        <Logo width="15px"/>
      </TweetInlineButtonsWrapper>
    </TweetWrapper>     
  )
}
