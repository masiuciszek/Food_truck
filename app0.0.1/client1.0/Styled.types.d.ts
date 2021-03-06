import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    appSize: string;
    shadow: {
      elevations: string[];
    };
    colors: {
      text: string;
      background: string;
      secondary: string;
      button: string;
      menuBg: string;
      shadowOne: string;
      shadowTwo: string;
      shadowThree: string;
    };
    size: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      p: string;
      a: string;
      maxWidth: string;
    };
    shadow: {
      elevations: Array<string>;
    };
    transition: {
      mainTransition: string;
      secondaryTransition: string;
      quickTransition: string;
    };
  }
}
