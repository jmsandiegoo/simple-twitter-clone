import React from "react";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import {
  signUp,
  authIsLoading
} from "./authenticationSlice";
import {
  Wrapper,
  Modal,
  ModalHeader,
  ModalContent,
  StyledExit,
  InputWrapper,
  SelectWrapper,
  StyledLabel,
  StyledInput,
  StyledSelect,
  SelectContainer,
  SubmitButtonWrapper,
} from "./style";
import { Logo } from "../../shared/component/Icons";
import { isLeapYear } from "../../app/utility";
import { Button } from "../../shared/Button.styled";
import { StyledSmall } from "../../shared/Small.styled";
import LoadingIndicator from "./component/LoadingIndicator";

export default function Register() {
  const isLoading = useSelector(authIsLoading);

  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      name: "",
      email: "",
      birthMonth: "",
      birthDay: "",
      birthYear: "",
    },
  });
  const birthMonth = watch("birthMonth");
  const birthDay = watch("birthDay");
  const birthYear = watch("birthYear");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const populateMonths = () => {
    return months.map((month, index) => (
      <option key={month} value={month}>
        {month}
      </option>
    ));
  };

  const populateDays = () => {
    let dayNum = 31;
    const dayComponents = [];
    if (
      birthMonth &&
      (birthMonth === "April" ||
        birthMonth === "June" ||
        birthMonth === "September" ||
        birthMonth === "November")
    ) {
      dayNum = 30;
    } else if (birthMonth && birthMonth === "February") {
      // check if leap year
      dayNum = 29;
      if (birthYear && !isLeapYear(birthYear)) {
        dayNum = 28;
      }
    }
    for (let i = 1; i <= dayNum; i++) {
      dayComponents.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return dayComponents;
  };

  const populateYears = () => {
    const years = [];
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 115;
    for (let i = startYear; i < currentYear; i++) {
      // only render when its feb
      years.unshift(i);
    }

    for (let i = years.length - 1; i >= 0; i--) {
      let isRemoved = false;
      if (
        birthMonth &&
        birthMonth === "February" &&
        birthDay &&
        birthDay === "29" &&
        !isLeapYear(years[i])
      ) {
        years.splice(i, 1);
        isRemoved = true;
      }

      if (!isRemoved) {
        years.splice(
          i,
          1,
          <option key={years[i]} value={years[i]}>
            {years[i]}
          </option>
        );
      }
    }
    return years;
  };

  const onSubmit = async (data) => {
    data["birthMonth"] = months.indexOf(data["birthMonth"]);
    try {
      await dispatch(signUp(data)).unwrap();
      history.replace(
        `/verifycode?username=${data["username"]}&email=${data["email"]}`
      );
    } catch (error) {
      console.error(error);
    }
  };

  const exitHandler = () => {
    history.replace("/");
  };

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
                <h2>Create your account</h2>
                <InputWrapper>
                  <StyledLabel>Name</StyledLabel>
                  <StyledInput {...register("name")} />
                </InputWrapper>
                <InputWrapper>
                  <StyledLabel>Email</StyledLabel>
                  <StyledInput type="email" {...register("email")} />
                </InputWrapper>
                <InputWrapper>
                  <StyledLabel>Username</StyledLabel>
                  <StyledInput {...register("username")} />
                </InputWrapper>
                <InputWrapper>
                  <StyledLabel>Password</StyledLabel>
                  <StyledInput
                    type="password"
                    {...register("password")}
                    autoComplete="off"
                  />
                </InputWrapper>

                <h4>Date of birth</h4>
                <StyledSmall>
                  This will not be shown publicly. Confirm your own age, even if
                  this account is for a business, a pet, or something else.
                </StyledSmall>
                <SelectContainer>
                  <SelectWrapper>
                    <StyledLabel>Month</StyledLabel>
                    <StyledSelect defaultValue="" {...register("birthMonth")}>
                      <option value="" disabled></option>
                      {populateMonths()}
                    </StyledSelect>
                  </SelectWrapper>
                  <SelectWrapper>
                    <StyledLabel>Day</StyledLabel>
                    <StyledSelect defaultValue="" {...register("birthDay")}>
                      <option value="" disabled></option>
                      {populateDays()}
                    </StyledSelect>
                  </SelectWrapper>
                  <SelectWrapper>
                    <StyledLabel>Year</StyledLabel>
                    <StyledSelect defaultValue="" {...register("birthYear")}>
                      <option value="" disabled></option>
                      {populateYears()}
                    </StyledSelect>
                  </SelectWrapper>
                </SelectContainer>
              </form>
              <SubmitButtonWrapper>
                <Button
                  type="submit"
                  width="95%"
                  buttonType="secondary"
                  onClick={handleSubmit(onSubmit)}
                >
                  Sign Up
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
