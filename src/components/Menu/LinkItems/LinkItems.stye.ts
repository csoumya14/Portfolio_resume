import styled from "styled-components";

export const Container = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    flex-direction: row;
    margin-top: 0rem;
  }
`;
