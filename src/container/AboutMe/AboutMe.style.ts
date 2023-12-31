import { NavigationLink } from "@/components/NavigationLink/NavigationLink";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 100%;
  height: 40rem;
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    flex-direction: row;
  }
`;
export const ImageContainer = styled.div`
  position: relative;
  flex: 1;
`;
export const TextContainer = styled.div`
  border-bottom: 1px solid grey;
  border-top: 1px solid grey;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  gap: 1rem;
  flex: 1;
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    justify-content: center;
    gap: 2rem;
  }
`;

export const StyledLink = styled(NavigationLink)`
  padding: 14px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
`;
