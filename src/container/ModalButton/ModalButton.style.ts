import { Banner } from "@/components/Banner/Banner";
import { Button } from "@/components/Button/Button";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledTitle = styled.h2`
  text-align: center;
`;

export const StyledButton = styled(Button)`
  padding: 1rem;

  background: ${(props) => props.theme.palette.primary.darkBlue};
  color: ${(props) => props.theme.palette.neutral.white};

  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    padding: 2rem;
  }
`;

export const StyledListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const StyledListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 20px;
  color: ${(props) => props.theme.palette.primary.darkBlue};
`;

export const StyledCompanyName = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.palette.primary.darkBlue};
`;

export const StyledPosition = styled(Banner)`
  font-size: 18px;
`;
