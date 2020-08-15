import React from "react";

import Header from "./Header";

const Layout = ({ children, toggleTheme }) => {
  return (
    <>
      <Header toggleTheme={toggleTheme}></Header>
      {children}
    </>
  );
};

export default Layout;
