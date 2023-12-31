import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    justify-content: center;
    gap: 2rem;
  }
`;
