import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      primary: {
        slightlyDesaturatedCyan: string;
        darkBlue: string;
        grayishDarkBlue: string;
      };
      secondary: {
        veryLightGrey: string;
        lightGrey: string;
        brightRed: string;
      };
      neutral: {
        darkSlateGrey: string;
        white: string;
      };
    };
    fontSizes: {
      heading1: {
        smallScreen: string;
        bigScreen: string;
      };
      heading2: {
        smallScreen: string;
        bigScreen: string;
      };
      heading3: {
        smallScreen: string;
        bigScreen: string;
      };
    };
    mediaSize: {
      s: string;
      md: string;
      lg: string;
      xlg: string;
    };

    width: {
      navBarWidth: number;
    };
  }
}
