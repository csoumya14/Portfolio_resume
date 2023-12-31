"use client";
import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "@/lib/registry";
import { theme } from "@/styles/themes/ThemeVariable";
import GlobalStyles from "@/styles/GlobalStyles";
import { Main } from "./Providers.style";
import { SharedTop } from "@/components/SharedTop/SharedTop";
import { Footer } from "@/container/Footer/Footer";

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <header>
          <SharedTop />
        </header>
        <Main>{props.children}</Main>
        <Footer />
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
