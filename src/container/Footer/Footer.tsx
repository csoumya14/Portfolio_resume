"use client";
import { LinkItems } from "@/components/Menu/LinkItems/LinkItems";
import { NavBar } from "@/components/Menu/NavBar/NavBar";
import { PageList } from "@/components/Menu/PageList/PageList";
import { FC, ReactNode, SetStateAction } from "react";
import {
  IconWrapper,
  StyledFooter,
  StyledLink,
  StyledMenu,
} from "./Footer.style";
import { GitHubIcon } from "@/components/SVGs/GithubIcon/GithubIcon";
import { LinkedInIcon } from "@/components/SVGs/LinkedInIcon/LinkedIcon";
import { NavigationLink } from "@/components/NavigationLink/NavigationLink";

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
      <IconWrapper>
        <StyledLink href="https://github.com/csoumya14">
          <GitHubIcon width={33} height={33} color="#ffffff" />
        </StyledLink>
        <StyledLink href="https://www.linkedin.com/in/soumya-chalakkal-60885246">
          <LinkedInIcon width={33} height={33} color="#ffffff" />
        </StyledLink>
      </IconWrapper>
    </StyledFooter>
  );
};
