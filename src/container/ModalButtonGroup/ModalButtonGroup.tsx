import { FC } from "react";

import { EducationType, WorkType } from "@/types/resumeType";
import { Container } from "./ModalButtonGroup.style";
import { ModalButton } from "../ModalButton/ModalButton";
import { ModalTitleTypes } from "@/enums/ModalTitle";

interface ModalButtonGroupProps {
  workContent: WorkType[];
  educationContent: EducationType[];
}

export const ModalButtonGroup: FC<ModalButtonGroupProps> = ({
  workContent,
  educationContent,
}) => {
  return (
    <Container>
      <ModalButton
        text={ModalTitleTypes.WorkExperience}
        workContent={workContent}
      />
      <ModalButton
        text={ModalTitleTypes.Education}
        educationContent={educationContent}
      />
    </Container>
  );
};
