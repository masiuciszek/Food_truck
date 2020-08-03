/* eslint-disable react/prop-types */
import * as React from "react";
import { useSelector } from "react-redux";
import useLocalStorage from "src/hooks/useLocalStorage";
import { AppState } from "src/store";
import { selectTheme } from "src/store/page/page.selector";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { lightTheme, darkTheme } from "utils/theme";
import Footer from "./Footer";
import Nav from "./Nav";
import Head from "next/head";

const StyledPage = styled.div`
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
`;

const Main = styled.main`
  max-width: ${({ theme }) => theme.size.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'radnika_next';
    src: url('/static/font/radnikanext-medium-webfont.woff2') format('woff2');
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
    font-family: 'radnika_next';
    background: ${(props) => props.theme.colors.background};
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.size.a};;
  }
  ul,li{
    list-style: none;
  }

  button { font-family: 'radnika_next'; font-weight: 300; }

`;

const Page: React.FC = ({ children }) => {
  const themeState = useSelector((state: AppState) => selectTheme(state));

  return (
    <ThemeProvider theme={themeState === "LIGHT" ? lightTheme : darkTheme}>
      <Head>
        <link rel="shortcut icon" href="/favicons/favicon.ico" />

        <link rel="icon" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" href="/favicons/favicon-16x16" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <GlobalStyles />
      <Nav className="main-nav" />
      <StyledPage>
        <Main>{children}</Main>
      </StyledPage>
      <Footer className="main-footer" />
    </ThemeProvider>
  );
};

export default Page;
