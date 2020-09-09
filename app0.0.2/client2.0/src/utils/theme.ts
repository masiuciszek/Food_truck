import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  appSize: "100%",
  colors: {
    text: "#333652",
    button: "#fad02c",
    secondary: "#90adc6",
    background: "#e9eaec",
    menuBg: "rgba(250,250,250,.7)",
    shadowOne: "rgba(0,0,0,0.5)",
    shadowTwo: "rgba(0,0,0,0.8)",
    shadowThree: "rgba(255,255,255,0.8)",
  },
  size: {
    h1: "3.052em",
    h2: "2.441em",
    h3: "1.953em",
    h4: "1.563em",
    h5: "1.25em",
    p: "1.15rem",
    a: "1rem",
    maxWidth: "1200px",
  },
  shadow: {
    elevations: [
      "box-shadow: inset 0 7px 9px -7px rgba(0,0,0, 0.7)",
      "box-shadow: 0 1px 3px rgba(0,0,0, 0.12), 0 1px 2px rgba(0,0,0, 0.24)",
      "box-shadow: 0 3px 6px rgba(0,0,0, 0.16), 0 3px 6px rgba(0,0,0, 0.23)",
      "box-shadow: 3px 2px rgba(42, 43, 49,.3)",
    ],
  },
  transition: {
    mainTransition: "all .3s linear",
    secondaryTransition: "all 1s ease",
    quickTransition: "all 200ms ease-in-out",
  },
};

export const darkTheme: DefaultTheme = {
  appSize: "100%",
  colors: {
    text: "#e9eaec",
    button: "#fad02c",
    secondary: "#90adc6",
    background: "#333652",
    menuBg: "rgba(250,250,250,.7)",
    shadowOne: "rgba(0,0,0,0.5)",
    shadowTwo: "rgba(0,0,0,0.8)",
    shadowThree: "rgba(255,255,255,0.8)",
  },
  size: {
    h1: "3.052em",
    h2: "2.441em",
    h3: "1.953em",
    h4: "1.563em",
    h5: "1.25em",
    p: "1.15rem",
    a: "1rem",
    maxWidth: "1200px",
  },
  shadow: {
    elevations: [
      "box-shadow: inset 0 7px 9px -7px rgba(0,0,0, 0.7)",
      "box-shadow: 0 1px 3px rgba(0,0,0, 0.12), 0 1px 2px rgba(0,0,0, 0.24)",
      "box-shadow: 0 3px 6px rgba(0,0,0, 0.16), 0 3px 6px rgba(0,0,0, 0.23)",
      "box-shadow: 3px 2px rgba(42, 43, 49,.3)",
    ],
  },
  transition: {
    mainTransition: "all .3s linear",
    secondaryTransition: "all 1s ease",
    quickTransition: "all 200ms ease-in-out",
  },
};
