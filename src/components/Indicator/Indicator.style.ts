import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  background: ${(props) => props.theme.palette.primary.darkBlue};
  display: flex;
  justify-content: space-between;
`;

export const ArrowWrapper = styled.div`
  background: ${(props) => props.theme.palette.primary.grayishDarkBlue};
  padding: 0.5rem;
  min-height: 100%;
  border: 1px solid red;
`;
