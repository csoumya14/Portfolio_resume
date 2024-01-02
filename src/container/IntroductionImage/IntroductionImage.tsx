import { FC } from "react";
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
