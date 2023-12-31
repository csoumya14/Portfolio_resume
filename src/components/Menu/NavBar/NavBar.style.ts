import styled from "styled-components";

export const StyledMenu = styled.nav<{ open: boolean }>`
  right: 0;
  top: 5rem;
  position: fixed;
  padding: 2rem 2rem;
  z-index: 1;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.palette.primary.darkBlue};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    transform: none;
    flex-direction: row;
    height: fit-content;
    background: none;
    top: 0;
    padding: 2rem;
  }
  @media (min-width: ${(props) => props.theme.mediaSize.lg}) {
    position: relative;
    margin-right: -1rem;
  }
`;
