"use client";
import { LinkItems } from "@/components/Menu/LinkItems/LinkItems";
import { PageList } from "@/components/Menu/PageList/PageList";
import { FC } from "react";
import { StyledFooter, StyledMenu } from "./Footer.style";
import { SocialProfileLinks } from "../SocialProfileLinks/SocialProfileLinks";

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  const linkPageList = [
    { id: 1, href: "/", pageTitle: "Home" },
    { id: 2, href: "/portfolio", pageTitle: "Portfolio" },
    { id: 3, href: "/contactme", pageTitle: "Contact Me" },
  ];
  return (
    <StyledFooter>
      <StyledMenu>
        <LinkItems
          items={linkPageList}
          renderItem={(listItem) => (
            <PageList key={listItem.id} listItem={listItem} />
          )}
        />
      </StyledMenu>
      <SocialProfileLinks
        gitHubLink="https://github.com/csoumya14"
        linkedInLink="https://www.linkedin.com/in/soumya-chalakkal-60885246"
        width="33"
        height="33"
        color="#ffffff"
      />
    </StyledFooter>
  );
};
