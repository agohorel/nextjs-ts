import React from "react";
import { useSelector } from "react-redux";

import Layout from "../components/layout/Layout";
import UserCard from "../components/UserCard";
import Followers from "../components/followers/Followers";
import GetStarted from "../components/GetStarted";
import Loader from "../components/layout/Loader";

const github = ({ toggleTheme }) => {
  const github_data = useSelector((state) => state.github);
  const hasData = Object.keys(github_data.user).length ? true : false;

  return (
    <Layout toggleTheme={toggleTheme}>
      {!hasData && !github_data.loading && <GetStarted></GetStarted>}

      {github_data.loading && <Loader type="Puff" height="40vh"></Loader>}

      {!github_data.loading && github_data.user && (
        <UserCard
          user={github_data.user}
          commits={github_data.commits}
        ></UserCard>
      )}

      {github_data.followers && (
        <Followers followers={github_data.followers}></Followers>
      )}
    </Layout>
  );
};

export default github;
