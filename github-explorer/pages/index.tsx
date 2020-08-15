import React from "react";

import Layout from "../components/layout/Layout";
import GetStarted from "../components/GetStarted";

const github = ({ toggleTheme }): Object => {
  return (
    <Layout toggleTheme={toggleTheme}>
      <GetStarted></GetStarted>
    </Layout>
  );
};

export default github;