"use client";
import { FC } from "react";
import { DownArrow } from "../SVGs/DownArrow/DownArrow";
import { ArrowWrapper, Container } from "./Indicator.style";

interface IndicatorProps {
  text: string;
}

export const Indicator: FC<IndicatorProps> = ({ text }) => {
  return (
    <Container>
      <ArrowWrapper>
        <DownArrow />
      </ArrowWrapper>
      {text}
    </Container>
  );
};
