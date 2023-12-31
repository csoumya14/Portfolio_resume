"use client";
import { FC } from "react";
import Image from "next/image";
import { Banner } from "@/components/Banner/Banner";
import { ImageContainer } from "./IntroductionImage.style";

interface IntroductionImageProps {
  imageSrc: string;
}

export const IntroductionImage: FC<IntroductionImageProps> = ({ imageSrc }) => {
  return (
    <ImageContainer>
      <Image src={imageSrc} alt="profilePic" fill={true} objectFit="cover" />
    </ImageContainer>
  );
};
