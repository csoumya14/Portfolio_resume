import { Banner } from "@/components/Banner/Banner";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledSpan = styled.span`
  font-weight: bold;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem 0;
  border-top: 1px solid grey;
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    flex-direction: row;
  }
`;

export const StyledTitle = styled(Banner)`
  flex: 1;
`;

export const StyledSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;
export const StyledContactDetails = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1rem;
`;
