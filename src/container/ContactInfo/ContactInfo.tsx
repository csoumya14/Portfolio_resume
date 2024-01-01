"use client";
import { FC } from "react";
import Image from "next/image";
import { Banner } from "@/components/Banner/Banner";

import { PublicProfileLinkType } from "@/types/contactType";
import { Wrapper } from "./ContactInfo.style";

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
}) => {
  console.log({ title });
  return (
    <Wrapper>
      <Banner textLevel={"h2"}>{title}</Banner>
      <Banner className="fontPublicSans" textLevel={"p"}>
        {summary}
      </Banner>
      <Banner className="fontPublicSans" textLevel={"p"}>
        <span>Phone:</span> {phoneNumber}
      </Banner>
      <Banner className="fontPublicSans" textLevel={"p"}>
        <span>Email:</span> {email}
      </Banner>
    </Wrapper>
  );
};
