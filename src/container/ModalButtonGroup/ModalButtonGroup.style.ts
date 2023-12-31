import { Button } from "@/components/Button/Button";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledButton = styled(Button)`
  padding: 1rem;
  width: 45%;
  background: ${(props) => props.theme.palette.primary.darkBlue};
  color: ${(props) => props.theme.palette.neutral.white};
`;
