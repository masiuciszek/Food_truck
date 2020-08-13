import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { lightTheme } from "../../src/utils/theme";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Space+Mono:400|Work+Sans:400');

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



     h1, h2, h3, h4, h5 {
  margin: 2.75rem 0 1.05rem;
  font-family: 'Space Mono', monospace;
  font-weight: 400;
  line-height: 1.15;

  small {
    font-size: 0.8em;
    }
}

`;

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
