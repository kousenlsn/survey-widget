import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      primary: string;
      secondary: string;
      light: string;
      dark: string;
      white: string;
    };
  }
}