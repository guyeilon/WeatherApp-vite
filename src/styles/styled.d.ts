import 'styled-components';

export type ThemeType = {
  mode: 'light' | 'dark';
  colors: {
    background: {
      body: {
        light: string;
        dark: string;
      };
      navigation: {
        desktop: { light: string; dark: string };
        mobile: { light: string; dark: string };
      };
    };
    status: {
      info: string;
      warning: string;
      error: string;
      success: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
    palette: {
      gradientBlue: string;
      white: string;
      darkWhite: string;
      black: string;
      gray: string;
      lightGray: string;
      darkGray: string;
      lightBlue: string;
    };
  };
  typography: {
    sizes: {
      h1: string;
      h2: string;
      h3: string;
      button: string;
      link1: string;
      link2: string;
      p1: string;
      p2: string;
    };
    weights: {
      extraBold: number;
      bold: number;
      medium: number;
      regular: number;
      small: number;
    };
  };
  breakpoints: {
    min: { mobile: string; laptop: string; desktop: string };
    max: { mobile: string; laptop: string; desktop: string };
  };
  scrollbar: {
    size: {
      width: string;
      height: string;
    };
    background: string;
    borderRadius: string;
  };
};

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
