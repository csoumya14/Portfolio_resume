import styled, { css } from "styled-components";
import { ButtonProps } from "./Button";
const COLOR = {
  primary: css`
    color: ${(props) => props.theme.palette.primary.darkBlue};
    background: ${(props) => props.theme.palette.neutral.white};
    border: none;
  `,
  secondary: css`
    color: #000;
    background: linear-gradient(#c7c7d2, #bcbaba);
  `,
};

export const Container = styled.button<ButtonProps>`
  ${(props) => props.color && COLOR[props.color]}
`;
