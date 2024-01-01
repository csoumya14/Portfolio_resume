import { Banner } from "@/components/Banner/Banner";
import styled from "styled-components";

export const StyledListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const StyledListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 20px;
  color: ${(props) => props.theme.palette.primary.darkBlue};
`;

export const StyledSchoolName = styled(Banner)`
  padding: 0;
  color: ${(props) => props.theme.palette.primary.darkBlue};
`;

export const StyledDegree = styled(Banner)`
  font-size: 18px;
`;
