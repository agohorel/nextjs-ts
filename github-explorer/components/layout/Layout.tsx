import React from "react";

import Header from "./Header";

interface Props {
  children: JSX.Element;
  toggleTheme: () => void;
}

const Layout: React.FC<Props> = ({ children, toggleTheme }) => {
  return (
    <>
      <Header toggleTheme={toggleTheme}></Header>
      {children}
    </>
  );
};

export default Layout;
