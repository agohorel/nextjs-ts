import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    blackish: "#0b0b0b",
    nearblack: "#2b2b2b",
    darkgrey: "#313233",
    midgrey: "#545657",
    lightgrey: "#8B8D8E",
    offwhite: "#e6e6e6",
    success: "#2E954B",
    warning: "#C8804C",
    failure: "#C84C4C",
    info: "#289FD2",
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

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
