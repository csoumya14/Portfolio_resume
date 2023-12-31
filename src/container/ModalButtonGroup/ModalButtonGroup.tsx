"use client";
import { FC } from "react";
import { Container, StyledButton } from "./ModalButtonGroup.style";

interface ModalButtonGroupProps {}

export const ModalButtonGroup: FC<ModalButtonGroupProps> = () => {
  return (
    <Container>
      <StyledButton className="fontPublicSans" type="button">
        Work Experience
      </StyledButton>{" "}
      <StyledButton className="fontPublicSans" type="button">
        Education
      </StyledButton>
    </Container>
  );
};
