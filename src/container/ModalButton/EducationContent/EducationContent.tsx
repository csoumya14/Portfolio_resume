import { FC } from "react";
import {
  StyledSchoolName,
  StyledDegree,
  StyledListContainer,
  StyledListItem,
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
          <StyledSchoolName textLevel="p" className="fontPublicSans">
            {item.school}
            <span>
              {item.start}-{item.end}
            </span>
          </StyledSchoolName>
          <StyledDegree textLevel="p" className="fontIbarraRealNova">
            {item.degree}
          </StyledDegree>
        </StyledListItem>
      ))}
    </StyledListContainer>
  );
};
