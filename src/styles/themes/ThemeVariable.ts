import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  palette: {
    primary: {
      slightlyDesaturatedCyan: "hsl(167,36%,54%)",
      darkBlue: "hsl(205, 41%, 21%)",
      grayishDarkBlue: "hsl(245,10%,22%)",
    },
    secondary: {
      veryLightGrey: "hsl(250,250,250)",
      lightGrey: "hsl(240, 2%, 92%)",
      brightRed: "hsl(0,90%,57%)",
    },
    neutral: {
      darkSlateGrey: "hsl(0, 0, 59.2%)",
      white: "hsl(0, 0%, 100%)",
    },
  },
  fontSizes: {
    heading1: {
      smallScreen: "30px",
      bigScreen: "52px",
    },
    heading2: {
      smallScreen: "40px",
      bigScreen: "42px",
    },
    heading3: {
      smallScreen: "32px",
      bigScreen: "36px",
    },
  },
  mediaSize: {
    s: "576px",
    md: "768px",
    lg: "992px",
    xlg: "1200px",
  },
  width: {
    navBarWidth: 574.406,
  },
};

export { theme };
