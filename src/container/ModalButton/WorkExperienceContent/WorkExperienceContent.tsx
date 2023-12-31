import { FC } from "react";
import {
  StyledCompanyName,
  StyledWrapper,
  StyledListContainer,
  StyledListItem,
  StyledPosition,
} from "./WorkExperienceContent.style";

import { WorkType } from "@/types/resumeType";
import { Banner } from "@/components/Banner/Banner";

interface WorkExperienceContentProps {
  content?: WorkType[];
}

export const WorkExperienceContent: FC<WorkExperienceContentProps> = ({
  content,
}) => {
  return (
    <StyledListContainer>
      {content?.map((item) => (
        <StyledListItem key={item.company}>
          <StyledWrapper>
            <StyledCompanyName href={item.link} className="fontPublicSans">
              {item.company}
            </StyledCompanyName>
            <span>
              {item.start}-{item.end}
            </span>
          </StyledWrapper>
          <StyledPosition textLevel="p" className="fontIbarraRealNova">
            {item.title}
          </StyledPosition>
          <Banner textLevel="p" className="fontPublicSans">
            {item.description}
          </Banner>
        </StyledListItem>
      ))}
    </StyledListContainer>
  );
};
