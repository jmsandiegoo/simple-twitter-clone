import React from "react";
import { Wrapper, Modal, ModalHeader, ModalContent, StyledExit } from "./style";
import { Logo, Exit } from "../../shared/Icons";

export default function Register() {
  return (
    <Wrapper backgroundColor="rgba(91, 112, 131, 0.4)">
      <Modal>
        <ModalHeader>
          <StyledExit width="1.2rem"/>
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
