import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from 'react-redux';
import {
  signIn,
  authIsLoading,
} from './authenticationSlice';
import {
  Wrapper,
  Modal,
  ModalHeader,
  ModalContent,
  StyledExit,
  InputWrapper,
  StyledLabel,
  StyledInput,
  SubmitButtonWrapper,
} from "./style";
import { Button } from "../../shared/Button.styled";
import { Logo } from "../../shared/Icons";
import LoadingIndicator from "./component/LoadingIndicator";

export default function Login() {
  const isLoading = useSelector(authIsLoading);
  
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit} = useForm({
    username: '',
    password: ''
  });

  const onSubmit = async (data) => {
    try {
      await dispatch(signIn(data)).unwrap();
      history.replace('/home');
    } catch (error) {
      console.error(error);
    }
  }

  const exitHandler = () => {
    history.replace('/');
  }

  return (
    <Wrapper backgroundColor="rgba(91, 112, 131, 0.4)">
      <Modal>
        <ModalHeader>
          <StyledExit width="1.2rem" onClick={() => exitHandler()}/>
          <Logo width="2rem"/>
        </ModalHeader>
        <ModalContent>
          { !isLoading ? 
            (
            <>
            <form>
            <h2>To get started, first enter your phone, email, or @username</h2>
            <InputWrapper>
              <StyledLabel>Username</StyledLabel>
              <StyledInput type="text" {...register("username")}></StyledInput>
            </InputWrapper>
            <InputWrapper>
              <StyledLabel>Password</StyledLabel>
              <StyledInput type="password" {...register("password")} />
            </InputWrapper>
          </form>
          <SubmitButtonWrapper>
            <Button
              type="submit"
              width="95%"
              buttonType="secondary"
              onClick={handleSubmit(onSubmit)}
            >
              Log In
            </Button>
          </SubmitButtonWrapper>
            </>
            )
            :
            (
            <LoadingIndicator/>
            )
            
          }
        </ModalContent>
      </Modal>
  </Wrapper>
  );
}
