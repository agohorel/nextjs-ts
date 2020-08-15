import React from "react";
import { ThemeProvider } from "styled-components";

const lightTheme = {
  colors: {
    scale_0: "#0b0b0b",
    scale_1: "#2b2b2b",
    scale_2: "#313233",
    scale_3: "#545657",
    scale_4: "#8B8D8E",
    scale_5: "#e6e6e6",
    scale_6: "#ffffff",
    success: "#23db57",
    warning: "#e3541b",
    failure: "#C84C4C",
    info: "#13aced",
    overlay: "rgba(255, 255, 255, 0.5)",
    boxShadow: "rgba(0, 0, 0, .25)",
  },
  fonts: ["Fira Code", "Roboto"],
  fontSizes: {
    small: "1.8em",
    medium: "2.4em",
    large: "3em",
    xl: "4em",
  },
  measurements: {
    inputPadding: "4px 8px",
    buttonPadding: "6px 10px",
    layoutPadding: "6rem",
    gridGap: "2rem",
    borderRadius: "3px",
  },
};

const darkTheme = {
  ...lightTheme,
  colors: {
    scale_6: "#0b0b0b",
    scale_5: "#2b2b2b",
    scale_4: "#313233",
    scale_3: "#545657",
    scale_2: "#8B8D8E",
    scale_1: "#e6e6e6",
    scale_0: "#ffffff",
    success: "#23db57",
    warning: "#e3541b",
    failure: "#C84C4C",
    info: "#13aced",
    overlay: "rgba(0, 0, 0, 0.5)",
    boxShadow: "rgba(175, 175, 175, .2)",
  },
};

const Theme = ({ theme, children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export { Theme, lightTheme, darkTheme };
