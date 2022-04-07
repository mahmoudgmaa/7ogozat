import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
} from "styled-components";

const GlobalStyle: GlobalStyleComponent<any, DefaultTheme> = createGlobalStyle`
  body {
      direction: ${({ lng }: any) => (lng === "en" ? "ltr" : "rtl")};
  }
`;

export default GlobalStyle;
