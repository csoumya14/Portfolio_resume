import { NavigationLink } from "@/components/NavigationLink/NavigationLink";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  max-width: 100%;
  height: 30rem;
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    flex-direction: row;
    height: 20rem;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ImageContainer = styled.div`
  position: relative;
  flex: 1;
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    height: 15rem;
  }
`;
export const TextContainer = styled.div`
  border-bottom: 1px solid grey;
  border-top: 1px solid grey;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  padding: 1rem;
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    border-top: none;
  }
`;

export const StyledLink = styled(NavigationLink)`
  padding: 14px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
`;

export const StackListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: space-around;
  max-width: 100%;
`;

export const StyledList = styled.li`
  list-style-type: none;
  padding: 0.5rem;
  border-radius: 10px;
  color: ${(props) => props.theme.palette.neutral.darkSlateGrey};

  background: ${(props) => props.theme.palette.primary.slightlyDesaturatedCyan};
`;
