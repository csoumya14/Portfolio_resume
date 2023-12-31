"use client";
import { FC, useState } from "react";
import {
  Container,
  StyledButton,
  StyledCompanyName,
  StyledWrapper,
  StyledListContainer,
  StyledListItem,
  StyledPosition,
  StyledTitle,
} from "./ModalButton.style";
import { Modal } from "@/components/Modal/Modal";
import { EducationType, WorkType } from "@/types/resumeType";
import { Banner } from "@/components/Banner/Banner";
import { EducationContent } from "./EducationContent/EducationContent";
import { WorkExperienceContent } from "./WorkExperienceContent/WorkExperienceContent";

interface ModalButtonProps {
  text: string;
  workContent?: WorkType[];
  educationContent?: EducationType[];
}

export const ModalButton: FC<ModalButtonProps> = ({
  text,
  educationContent,
  workContent,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <Container>
      <Modal open={showModal} onClose={toggleModal}>
        <StyledTitle className="fontPublicSans">{text}</StyledTitle>
        {text === "Education" ? (
          <EducationContent content={educationContent} />
        ) : (
          <WorkExperienceContent content={workContent} />
        )}
      </Modal>
      <StyledButton
        className="fontPublicSans"
        onClick={toggleModal}
        type="button"
      >
        {text}
      </StyledButton>
    </Container>
  );
};
