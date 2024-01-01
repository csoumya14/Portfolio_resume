"use client";
import { FC } from "react";
import Image from "next/image";
import { Banner } from "@/components/Banner/Banner";
import { ImageContainer } from "./IntroductionImage.style";
import { IntroductionText } from "@/components/IntroductionText/IntroductionText";

interface IntroductionImageProps {
  text: string;
}

export const IntroductionImage: FC<IntroductionImageProps> = ({ text }) => {
  return (
    <ImageContainer>
      <IntroductionText text={text} />
    </ImageContainer>
  );
};
