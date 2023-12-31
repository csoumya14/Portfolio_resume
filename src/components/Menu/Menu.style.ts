import styled from "styled-components";
import { Button } from "../Button/Button";

export const OpenCloseButton = styled(Button)`
  background: none;
  border: none;
  align-self: flex-end;
  z-index: 999;
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    display: none;
  }
`;
