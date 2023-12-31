import styled from "styled-components";
import { Button } from "../Button/Button";

export const StyledContainer = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? "flex" : "none")};

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 12;
  height: 90%;
  background: #00000099;
`;

export const StyledModal = styled.div`
  position: fixed;
  background: white;
  padding: 2rem;
  width: 90%;
  height: auto;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  border-radius: 20px;
`;

export const StyledButton = styled(Button)`
  padding: 1rem;
  border: 1px solid;
  border-color: ${(props) => props.theme.palette.primary.darkBlue};
  color: ${(props) => props.theme.palette.primary.darkBlue};
`;
