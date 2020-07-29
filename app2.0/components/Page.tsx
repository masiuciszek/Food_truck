import * as React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { lightTheme } from "utils/theme";

const StyledPage = styled.div``;

const Main = styled.main``;

const GlobalStyles = createGlobalStyle`

    @font-face {
    font-family: 'Lato';
    src: url('/public/static/font/Lato-Regular.ttf') format('ttf');
    font-weight: normal;
    font-style: normal;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
  }


  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Lato';
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.size.a};;
  }
  ul,li{
    list-style: none;
  }

  button {  font-family: 'Lato'; }

`;

const Page: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <StyledPage>
        <Main>{children}</Main>
      </StyledPage>
    </ThemeProvider>
  );
};

export default Page;
