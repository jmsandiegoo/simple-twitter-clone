import React from "react";
import { useHistory } from "react-router";
import { Wrapper, Modal, ModalHeader, ModalContent, StyledExit } from "./style";
import { Logo } from "../../shared/Icons";

export default function Register() {
  const history = useHistory();

  const exitHandler = () => {
    history.goBack();
  }

  return (
    <Wrapper backgroundColor="rgba(91, 112, 131, 0.4)">
      <Modal>
        <ModalHeader>
          <StyledExit width="1.2rem" onClick={() => exitHandler()}/>
          <Logo width="2rem"/>
        </ModalHeader>
        <ModalContent>
          <form>
            
          </form>
        </ModalContent>
      </Modal>
  </Wrapper>
  );
}
