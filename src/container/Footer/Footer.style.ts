import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.palette.primary.grayishDarkBlue};
  color: ${(props) => props.theme.palette.neutral.white};
`;

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
  gap: 2rem;
  width: 100vw;
  background: ${(props) => props.theme.palette.primary.grayishDarkBlue};
  color: ${(props) => props.theme.palette.neutral.white};
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;