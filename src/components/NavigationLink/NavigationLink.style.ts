import styled, { css } from "styled-components";
import { NavigationLinkProps } from "./NavigationLink";
const COLOR = {
  primary: css`
    color: ${(props) => props.theme.palette.primary.slightlyDesaturatedCyan};
    background: ${(props) => props.theme.palette.primary.darkBlue};
    border: none;
  `,
  secondary: css`
    color: #000;
    border: 1px solid;
    border-color: ${(props) => props.theme.palette.primary.grayishDarkBlue};
    background: ${(props) => props.theme.palette.neutral.white};
  `,
};

const DISABLED = css`
  cursor: not-allowed;
  background: ${(props) => props.theme.palette.neutral.darkSlateGrey};
  box-shadow: none;
  color: ${(props) => props.theme.palette.neutral.white};
`;

export const Container = styled.a<NavigationLinkProps>`
  padding: 1rem;
  color: ${(props) => props.theme.palette.neutral.white};
  &:hover {
    background: ${(props) => props.theme.palette.primary.darkBlue};
    color: ${(props) => props.theme.palette.neutral.white};
  }

  ${(props) => props.color && COLOR[props.color]}
  ${(props) => props.disabled && DISABLED}
`;
