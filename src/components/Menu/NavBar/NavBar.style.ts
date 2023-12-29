import styled from "styled-components";

export const StyledMenu = styled.nav<{ open: boolean }>`
  right: 0;
  top: 5rem;
  position: fixed;
  background: rgba(11, 13, 23, 0.7);
  backdrop-filter: blur(5px);
  padding: 2rem 2rem;
  z-index: 1;
  display: flex;
  flex-direction: column;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    transform: none;
    flex-direction: row;
    height: fit-content;
    padding: 2rem;
  }
  @media (min-width: ${(props) => props.theme.mediaSize.lg}) {
    position: relative;
    margin-right: -1rem;
  }
`;
