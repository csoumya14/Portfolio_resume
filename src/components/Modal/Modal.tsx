import { FC } from "react";
import { StyledButton, StyledContainer, StyledModal } from "./Modal.style";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({ open, onClose, children }) => {
  return (
    <StyledContainer open={open}>
      <StyledModal>
        {children}
        <StyledButton type="button" onClick={onClose}>
          Close
        </StyledButton>
      </StyledModal>
    </StyledContainer>
  );
};
