import { NavigationLink } from "@/components/NavigationLink/NavigationLink";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 100%;
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    flex-direction: row;
  }
`;
export const ImageContainer = styled.div`
  width: 50%;
  position: relative;
`;
export const TextContainer = styled.div`
  border-bottom: 1px solid grey;
  border-top: 1px solid grey;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  gap: 1rem;
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    width: 50%;
  }
`;

export const StyledLink = styled(NavigationLink)`
  padding: 14px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
`;
