import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  authIsLoading,
  confirmSignUp,
} from "./authenticationSlice"
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
import { StyledSmall } from "../../shared/Small.styled";
import { Logo } from "../../shared/Icons";
import LoadingIndicator from "./component/LoadingIndicator";

export default function VerifyCode() {
  const isLoading = useSelector(authIsLoading);

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const { register, handleSubmit } = useForm({
    code: '',
  });

  const onSubmit = async (data) => {
    try {
      data['username'] = queryParams.get('username');
      data['code'] = data['code'].replace(" ", "");
      await dispatch(confirmSignUp(data)).unwrap();
      history.replace('/login');
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
          <StyledExit width="1.2rem" onClick={() => exitHandler()} />
          <Logo width="2rem" />
        </ModalHeader>
        <ModalContent>
          {!isLoading ? (
            <>
              <form>
                <h2>
                  We sent you a code
                </h2>
                <StyledSmall>
                  Enter it below to verify {queryParams.get('email')}
                </StyledSmall>
                <InputWrapper>
                  <StyledLabel>Verification code</StyledLabel>
                  <StyledInput
                    type="text"
                    {...register("code")}
                  ></StyledInput>
                </InputWrapper>
              </form>
              <SubmitButtonWrapper>
                <Button
                  type="submit"
                  width="95%"
                  buttonType="secondary"
                  onClick={handleSubmit(onSubmit)}
                >
                  Next
                </Button>
              </SubmitButtonWrapper>
            </>
          ) : (
            <LoadingIndicator />
          )}
        </ModalContent>
      </Modal>
    </Wrapper>
  );
}
