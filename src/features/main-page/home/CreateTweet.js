import React from 'react';
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { authUser } from '../../authentication/authenticationSlice';
import styled from 'styled-components/macro';
import avatarImg from "../../../assets/images/avatar_placeholder.jpg";
import { Button } from '../../../shared/Button.styled';
import { MainContentWrapper, StyledAvatar,StyledText } from '../style';

const CreateTweetWrapper = styled(MainContentWrapper)`
  & form {
    padding: 10px 20px;
    margin: 0 0 5px 0;
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-gap: 5px 20px;
    align-items: center;
    border-width: 0 0 1px 0;
  }

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

const ButtonWrapper = styled.div`
  grid-column: 2;
  display:flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled(Button)`
  justify-self: end;
  height: 35px;
  padding: 0 15px;
`

export function CreateTweet({onCreateTweet}) {
  const user = useSelector(authUser);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      content: "",
    },
  });
  const onSubmit = (data) => {
    const newTweet = {
      id: Math.floor(Math.random() * 10000),
      content: data.content,
      user: {
        username: user.username,
        name: user.attributes.name
      }
    }
    console.log('happens here');
    onCreateTweet(newTweet);
  }
 
  return (
    <CreateTweetWrapper>
      <form>
        <StyledAvatar src={`${avatarImg}`}/>
        <StyledInput rows="1" placeholder="What's happening?" {...register("content")} />
        <ButtonWrapper>
          <StyledText> Icons </StyledText>
          <StyledButton buttonType="secondary" type="submit" onClick={handleSubmit(onSubmit)}>Tweet</StyledButton>
        </ButtonWrapper>
      </form>
    </CreateTweetWrapper>
  )
}
