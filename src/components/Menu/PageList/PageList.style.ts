import Link from "next/link";
import styled from "styled-components";

export const StyledList = styled.li`
  text-transform: uppercase;
  margin-bottom: 10px;
  font-weight: normal;
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
  letter-spacing: 2.36px;
  color: ${(props) => props.theme.palette.primary.lightBlue};
  &[aria-current="page"] {
    border-bottom: 2px solid;
    border-color: ${(props) => props.theme.palette.primary.lightBlue};
  }
  &:hover {
    border-bottom: 2px solid;
    border-color: ${(props) => props.theme.palette.primary.grey};
  }
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    padding-bottom: 2rem;
  }
`;