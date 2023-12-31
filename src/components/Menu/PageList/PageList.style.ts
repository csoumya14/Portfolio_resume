import Link from "next/link";
import styled from "styled-components";

export const StyledList = styled.li`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 10px;
  list-style-type: none;
  @media (max-width: ${(props) => props.theme.mediaSize.s}) {
    margin-bottom: 0px;
  }
  @media (min-width: ${(props) => props.theme.mediaSize.lg}) {
    margin-bottom: 0px;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.palette.neutral.white};
  &[aria-current="page"] {
    border-bottom: 2px solid;
    border-color: ${(props) => props.theme.palette.neutral.white};
  }
  &:hover {
    border-bottom: 2px solid;
    border-color: ${(props) => props.theme.palette.primary.grayishDarkBlue};
  }
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    padding-bottom: 0.5rem;
  }
`;
