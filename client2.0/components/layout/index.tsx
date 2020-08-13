import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { lightTheme } from "../../src/utils/theme";
import { Main } from "../styled/Page";
import Head from "next/head";
import Nav from "../styled/nav/Nav";

const GlobalStyles = createGlobalStyle`
  *,
  *:before,
  *:after {
      box-sizing: inherit;
    }

  html {
    box-sizing: border-box;
    font-size: ${(props) => props.theme.appSize}; /**16px */
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    font-family: 'Work Sans', sans-serif;
    font-weight: 400;
    line-height: 1.65;
    padding: 0;
    margin: 0;
    color: ${(props) => props.theme.colors.text};
  }


  a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.text};
      font-size: ${({ theme }) => theme.size.a};;
    }

  ul,li{
    list-style: none;
  }

  button {
      font-family: 'Space Mono', monospace;
      font-weight: 300;
     }



     h1, h2, h3, h4, h5
  {
    margin: 2.75rem 0 1.05rem;
    font-family: 'Space Mono', monospace;
    font-weight: 400;
    line-height: 1.15;

  }

  small {
      font-size: 0.8em;
      }

`;

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <title>Food truck</title>
      </Head>
      <Nav className="Main-nav" />
      <GlobalStyles />
      <Main>{children}</Main>
    </ThemeProvider>
  );
};

export default Layout;
