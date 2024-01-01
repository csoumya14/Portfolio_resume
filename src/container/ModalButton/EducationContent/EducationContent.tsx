import { FC } from "react";
import {
  StyledSchoolName,
  StyledDegree,
  StyledListContainer,
  StyledListItem,
  StyledWrapper,
} from "./EducationContent.style";
import { EducationType } from "@/types/resumeType";

interface EducationContentProps {
  content?: EducationType[];
}

export const EducationContent: FC<EducationContentProps> = ({ content }) => {
  return (
    <StyledListContainer>
      {content?.map((item) => (
        <StyledListItem key={item.school}>
          <StyledWrapper>
            <StyledSchoolName textLevel="p" className="fontPublicSans">
              {item.school}
            </StyledSchoolName>
            <span>
              {item.start}-{item.end}
            </span>
          </StyledWrapper>
          <StyledDegree textLevel="p" className="fontIbarraRealNova">
            {item.degree}
          </StyledDegree>
        </StyledListItem>
      ))}
    </StyledListContainer>
  );
};
