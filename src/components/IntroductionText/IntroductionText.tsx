"use client";
import { FC } from "react";
import { StyledHeading1 } from "./IntroductionText.style";

interface IntroductionTextProps {
  text: string;
}

export const IntroductionText: FC<IntroductionTextProps> = ({ text }) => {
  return <StyledHeading1 textLevel={"h1"}>{text}</StyledHeading1>;
};
