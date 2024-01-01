import styled from "styled-components";
import { Banner } from "../Banner/Banner";

export const StyledHeading1 = styled(Banner)`
  color: ${(props) => props.theme.palette.primary.grayishDarkBlue};
  font-size: ${(props) => props.theme.fontSizes.heading1.smallScreen};
  width: 80%;
  position: absolute;
  bottom: 0;
  padding: 1rem;
  background: ${(props) => props.theme.palette.neutral.white};
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    width: 50%;
  }
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    width: 60%;
    font-size: ${(props) => props.theme.fontSizes.heading1.bigScreen};
  }
`;
