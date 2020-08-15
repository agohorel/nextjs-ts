import React from "react";
import styled from "styled-components";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

import Icon from "../library/Icon";

const ThemeToggle = ({ toggleTheme }) => {
  let currentTheme = "light";

  if (process.browser) {
    currentTheme = window.localStorage.getItem("theme");
  }

  return (
    <ThemeIcon onClick={toggleTheme}>
      {currentTheme === "light" ? (
        <Icon size="4x" icon={faMoon} onClick={toggleTheme}></Icon>
      ) : (
        <Icon size="4x" icon={faSun} onClick={toggleTheme}></Icon>
      )}
    </ThemeIcon>
  );
};

export default ThemeToggle;

const ThemeIcon = styled.div`
  svg {
    color: ${({ theme: { colors } }) => colors.scale_1};
    transition: 0.2s ease-out color;
  }

  :hover {
    cursor: pointer;
  }

  :hover svg {
    color: ${({ theme: { colors } }) => colors.scale_4};
  }
`;
