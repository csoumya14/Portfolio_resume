import { FC } from "react";
import Image from "next/image";
import { Banner } from "@/components/Banner/Banner";
import {
  ImageContainer,
  LinkContainer,
  StackListContainer,
  StyledLink,
  StyledList,
  TextContainer,
  Wrapper,
} from "./ProjectDetails.style";
import { LinkType } from "@/types/portfolioType";

interface ProjectDetailsProps {
  imageSrc: string;
  description: string;
  title: string;
  techStack: string[];
  link: LinkType;
}

export const ProjectDetails: FC<ProjectDetailsProps> = ({
  imageSrc,
  description,
  techStack,
  link,
  title,
}) => {
  return (
    <Wrapper>
      <ImageContainer>
        <Image src={imageSrc} alt="project pic" placeholder="empty" fill />
      </ImageContainer>
      <TextContainer>
        <Banner className="fontIbarraRealNova" textLevel={"h2"}>
          {title}
        </Banner>
        <Banner className="fontPublicSans" textLevel={"p"}>
          {description}
        </Banner>
        <LinkContainer>
          <StyledLink color="secondary" href={link.github}>
            GitHub Link
          </StyledLink>
          <StyledLink color="secondary" href={link.live}>
            Live Link
          </StyledLink>
        </LinkContainer>
        <StackListContainer>
          {techStack.map((item) => (
            <StyledList className="fontPublicSans" key={item}>
              {item}
            </StyledList>
          ))}
        </StackListContainer>
      </TextContainer>
    </Wrapper>
  );
};
