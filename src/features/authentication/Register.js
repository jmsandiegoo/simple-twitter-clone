import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { Wrapper, Modal, ModalHeader, ModalContent, StyledExit } from "./style";
import { Logo } from "../../shared/Icons";
import { current } from "immer";

export default function Register() {
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
  const watchAllFields = watch();
  console.log(watchAllFields);
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

  const populateDays = (month) => {
    let dayNum;
    const dayComponents = [];
    if (
      month === "January" ||
      month === "March" ||
      month === "May" ||
      month === "July" ||
      month === "August" ||
      month === "October" ||
      month === "December"
    ) {
      dayNum = 31;
    } else if (
      month === "April" ||
      month === "June" ||
      month === "September" ||
      month === "November"
    ) {
      dayNum = 30;
    } else {
      // check if leap year
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
      years.unshift(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return years;
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const exitHandler = () => {
    history.goBack();
  };

  return (
    <Wrapper backgroundColor="rgba(91, 112, 131, 0.4)">
      <Modal>
        <ModalHeader>
          <StyledExit width="1.2rem" onClick={() => exitHandler()} />
          <Logo width="2rem" />
        </ModalHeader>
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Create your account</h2>
            <div>
              <input {...register("name")} />
            </div>
            <div>
              <input {...register("email")} />
            </div>
            <h4>Date of birth</h4>
            <p>
              This will not be shown publicly. Confirm your own age, even if
              this account is for a business, a pet, or something else.
            </p>
            <select defaultValue="" {...register("birthMonth")}>
              <option value="" disabled></option>
              {populateMonths()}
            </select>
            <select defaultValue="" {...register("birthDay")}>
              <option value="" disabled></option>
              {populateDays(watchAllFields.birthMonth)}
            </select>
            <select defaultValue="" {...register("birthYear")}>
              <option value="" disabled></option>
              {populateYears()}
            </select>
          </form>
          <p>{watchAllFields.name}</p>
        </ModalContent>
      </Modal>
    </Wrapper>
  );
}
