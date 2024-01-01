import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 100vw;
  padding: 6rem 2rem;
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
  }
`;
