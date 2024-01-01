import styled from "styled-components";
import websiteCover from "../../../public/home/projectImage.png";

export const ImageContainer = styled.div`
  height: 70vh;
  position: relative;
  background-image: url(${websiteCover.src});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;
