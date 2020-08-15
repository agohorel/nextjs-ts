import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: "Fira Code", monospace;
      line-height: 1.6;
      box-sizing: border-box;
      font-size: 62.5%;
      background-color: ${({ theme: { colors } }) => colors.scale_6};
      color: ${({ theme: { colors } }) => colors.scale_0};
      transition: 0.3s ease-in-out background, color;
    }
`;
