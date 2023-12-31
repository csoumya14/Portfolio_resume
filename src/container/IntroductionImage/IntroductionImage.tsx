"use client";
import { FC } from "react";
import Image from "next/image";
import { Banner } from "@/components/Banner/Banner";
import { ImageContainer } from "./IntroductionImage.style";
import { IntroductionText } from "@/components/IntroductionText/IntroductionText";

interface IntroductionImageProps {
  imageSrc: string;
  text: string;
}

export const IntroductionImage: FC<IntroductionImageProps> = ({
  imageSrc,
  text,
}) => {
  return (
    <>
      <ImageContainer>
        <IntroductionText text={text} />
      </ImageContainer>
    </>
  );
};
