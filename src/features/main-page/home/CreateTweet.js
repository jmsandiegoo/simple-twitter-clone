import React from 'react';
import styled from 'styled-components';
import avatarImg from "../../../assets/images/avatar_placeholder.jpg";
import { Button } from '../../../shared/Button.styled';

const CreateTweetWrapper = styled.div`
  padding: 10px 20px;
  display: grid;
  grid-template-columns: min-content 1fr;
`
const StyledAvatar = styled.img`
  width: 48px;
  height: 48px;
`
const StyledInput = styled.textarea`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  font-size: 20px;
  resize: none;
  &:focus {
    outline: none;
  }
`;

const StyledButton = styled(Button)`
  grid-column: 2;
  justify-self: end;
  padding: 0 20px;
`


export function CreateTweet() {
  return (
    <CreateTweetWrapper>
      <StyledAvatar src={`${avatarImg}`}/>
      <StyledInput placeholder="What's happening?" />
      <p>Icons</p>
      <StyledButton buttonType="secondary">Tweet</StyledButton>
    </CreateTweetWrapper>
  )
}
