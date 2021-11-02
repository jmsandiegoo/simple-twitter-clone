import styled from "styled-components";
import { Container } from "../../shared/Container.styled";
import { Exit } from "../../shared/component/Icons";

export const StyledExit = styled(Exit)``;

export const Wrapper = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0;
`;

export const Modal = styled.div`
  padding: 15px;
  width: 600px;
  max-width: 100%;
  height: 650px;
  max-height: 100%;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled(Container)`
  padding: 0;
  text-align: center;
  position: relative;

  & ${StyledExit} svg {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const ModalContent = styled(Container)`
  flex: 1;
`;

export const InputWrapper = styled.div`
  position: relative;
  height: 50px;
  padding: 5px;
  border: 0.1px solid ${({ theme }) => theme.colors.smallText};
  border-radius: 3px;
  margin: 20px 0;
`;

export const StyledLabel = styled.label`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.smallText};
`;

export const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  border: none;

  &:focus {
    outline: none;
  }
`;

export const StyledSelect = styled.select`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  border: none;

  &:focus {
    outline: none;
  }
`;

export const SelectWrapper = styled.div`
  height: 50px;
  padding: 5px;
  border: 0.1px solid ${({ theme }) => theme.colors.smallText};
  margin: 20px 5px;
  flex: ${({ flex }) => flex || 1};
`;

export const SelectContainer = styled.div`
  display: flex;
`;

export const SubmitButtonWrapper = styled.div`
  text-align: center;
`;

export const LoadingIndicatorWrapper = styled.div`
  flex: 1;
`