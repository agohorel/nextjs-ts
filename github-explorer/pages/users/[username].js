import React from "react";
import { useSelector } from "react-redux";

import Layout from "../../components/layout/Layout";
import UserCard from "../../components/UserCard";
import Followers from "../../components/followers/Followers";
import Loader from "../../components/layout/Loader";

const users = ({ toggleTheme }) => {
  const githubData = useSelector((state) => state.github);

  return (
    <Layout toggleTheme={toggleTheme}>
      {githubData.loading && <Loader type="Puff" height="40vh"></Loader>}

      {!githubData.loading && githubData.user && (
        <UserCard
          user={githubData.user}
          commits={githubData.commits}
        ></UserCard>
      )}

      {githubData.followers && (
        <Followers followers={githubData.followers}></Followers>
      )}
    </Layout>
  );
};

export default users;
