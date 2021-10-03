import styled from "styled-components";
import { Container } from "../../shared/Container.styled";
import { Exit } from "../../shared/Icons";

export const StyledExit = styled(Exit)``;

export const Wrapper = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0;
`

export const Modal = styled.div`
  padding: 15px;
  width: 600px;
  max-width: 100%;
  height: 650px;
  max-height: 100%;
  border-radius: 15px;
  background-color: ${({theme}) => theme.colors.background};
`

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
`

export const ModalContent = styled(Container)`

`