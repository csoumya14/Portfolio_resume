"use client";
import { FC } from "react";
import { IconWrapper, StyledLink } from "./SocialProfileLinks.style";
import { GitHubIcon } from "@/components/SVGs/GithubIcon/GithubIcon";
import { LinkedInIcon } from "@/components/SVGs/LinkedInIcon/LinkedIcon";

interface SocialProfileLinkProps {
  gitHubLink: string;
  linkedInLink: string;
  width: string;
  height: string;
  color: string;
}

export const SocialProfileLinks: FC<SocialProfileLinkProps> = ({
  gitHubLink,
  linkedInLink,
  width,
  height,
  color,
}) => {
  return (
    <IconWrapper>
      <StyledLink href={gitHubLink}>
        <GitHubIcon width={width} height={width} color={color} />
      </StyledLink>
      <StyledLink href={linkedInLink}>
        <LinkedInIcon width={width} height={height} color={color} />
      </StyledLink>
    </IconWrapper>
  );
};
