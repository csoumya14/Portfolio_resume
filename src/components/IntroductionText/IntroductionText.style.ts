import styled from "styled-components";
import { Banner } from "../Banner/Banner";

export const StyledHeading1 = styled(Banner)`
  color: ${(props) => props.theme.palette.primary.grayishDarkBlue};
  font-size: ${(props) => props.theme.fontSizes.heading1.smallScreen};
`;
