import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { mainTheme } from "../../src/utils/theme";
import Head from "next/head";
import styled from "styled-components";
import Header from "./Header";

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
    background-color: ${(props) => props.theme.colors.elements.bg};
    font-family: 'Work Sans', sans-serif;
    font-weight: 400;
    line-height: 1.65;
    padding: 0;
    margin: 0;
    color: ${(props) => props.theme.colors.elements.paragraph};
  }

  a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.elements.buttonText};
      font-size: ${({ theme }) => theme.size.a};
      text-transform: capitalize;
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
    color: ${({ theme }) => theme.colors.elements.paragraph};
  }
  h1{
    font-size: ${({ theme }) => theme.size.h1};
  }
  h2{
    font-size: ${({ theme }) => theme.size.h2};
  }
  h3{
    font-size: ${({ theme }) => theme.size.h3};
  }
  h4{
    font-size: ${({ theme }) => theme.size.h4};
  }
  h5{
    font-size: ${({ theme }) => theme.size.h5};
  }
  small {
      font-size: 0.8em;
      }
  p{
    color: ${({ theme }) => theme.colors.elements.paragraph};
    font-size: ${({ theme }) => theme.size.p};
  }
`;

const Main = styled.main`
  margin: 0 auto;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <title>Sick tastes</title>
      </Head>
      <Header />
      <GlobalStyles />
      <Main>{children}</Main>
    </ThemeProvider>
  );
};

export default Layout;
