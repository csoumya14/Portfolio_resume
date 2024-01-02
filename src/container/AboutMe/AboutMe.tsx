import { FC } from "react";
import Image from "next/image";
import { Banner } from "@/components/Banner/Banner";
import {
  ImageContainer,
  StyledLink,
  TextContainer,
  Wrapper,
} from "./AboutMe.style";

interface AboutMeProps {
  imageSrc: string;
  description: string;
}

export const AboutMe: FC<AboutMeProps> = ({ imageSrc, description }) => {
  return (
    <Wrapper>
      <ImageContainer>
        <Image src={imageSrc} alt="profilePic" fill={true} objectFit="cover" />
      </ImageContainer>
      <TextContainer>
        <Banner textLevel={"h2"}>About Me</Banner>
        <Banner className="fontPublicSans" textLevel={"p"}>
          {description}
        </Banner>
        <StyledLink color="secondary" href="/portfolio">
          Go to portfolio
        </StyledLink>
      </TextContainer>
    </Wrapper>
  );
};
