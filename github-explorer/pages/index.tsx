import React from "react";

import Layout from "../components/layout/Layout";
import GetStarted from "../components/GetStarted";

interface Props {
  toggleTheme: () => void;
}

const github: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <Layout toggleTheme={toggleTheme}>
      <GetStarted></GetStarted>
    </Layout>
  );
};

export default github;
