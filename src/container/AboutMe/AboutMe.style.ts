import { NavigationLink } from "@/components/NavigationLink/NavigationLink";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledLine = styled.div`
  border-bottom: 1px solid red;
  border-color: ${(props) => props.theme.palette.primary.grayishDarkBlue};
`;

export const StyledLink = styled(NavigationLink)`
  padding: 14px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
`;
