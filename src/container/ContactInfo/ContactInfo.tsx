"use client";
import { FC } from "react";
import Image from "next/image";
import { Banner } from "@/components/Banner/Banner";

import { PublicProfileLinkType } from "@/types/contactType";
import {
  StyledContactDetails,
  StyledSpan,
  StyledSummary,
  StyledTitle,
  TextContainer,
  Wrapper,
} from "./ContactInfo.style";
import { SocialProfileLinks } from "../SocialProfileLinks/SocialProfileLinks";

interface ContactInfoProps {
  title: string;
  summary: string;
  phoneNumber: string;
  email: string;
  link: PublicProfileLinkType;
}

export const ContactInfo: FC<ContactInfoProps> = ({
  title,
  summary,
  phoneNumber,
  email,
  link,
}) => {
  console.log({ title });
  return (
    <Wrapper>
      <TextContainer>
        <StyledTitle textLevel={"h2"}>{title}</StyledTitle>
        <StyledSummary>
          <Banner className="fontPublicSans" textLevel={"p"}>
            {summary}
          </Banner>
          <SocialProfileLinks
            gitHubLink={link.github}
            linkedInLink={link.linkedIn}
            width="22"
            height="22"
            color="#000000"
          />
        </StyledSummary>
      </TextContainer>
      <TextContainer>
        <StyledTitle textLevel={"h2"}>Contact Me</StyledTitle>
        <StyledContactDetails>
          <Banner className="fontPublicSans" textLevel={"p"}>
            <StyledSpan>Phone:</StyledSpan> {phoneNumber}
          </Banner>
          <Banner className="fontPublicSans" textLevel={"p"}>
            <StyledSpan>Email:</StyledSpan> {email}
          </Banner>
        </StyledContactDetails>
      </TextContainer>
    </Wrapper>
  );
};
