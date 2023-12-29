"use client";
import { FC } from "react";
import Image from "next/image";
import { Banner } from "@/components/Banner/Banner";
import { StyledLine, StyledLink, Wrapper } from "./AboutMe.style";

interface AboutMeProps {
  imageSrc: string;
  description: string;
}

export const AboutMe: FC<AboutMeProps> = ({ imageSrc, description }) => {
  return (
    <Wrapper>
      <Image
        src={imageSrc}
        width={50}
        height={50}
        alt="profilePic"
        layout="responsive"
      />
      <StyledLine />
      <Banner textLevel={"h2"}>About Me</Banner>
      <Banner className="fontPublicSans" textLevel={"p"}>
        {description}
      </Banner>
      <StyledLink color="secondary" href="/portfolio">
        Go to portfolio
      </StyledLink>
    </Wrapper>
  );
};
