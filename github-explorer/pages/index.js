import React from "react";
import { useSelector } from "react-redux";

import Layout from "../components/layout/Layout";
import UserCard from "../components/UserCard";
import Followers from "../components/followers/Followers";

const github = () => {
  const github_data = useSelector((state) => state.github);
  console.log(github_data);

  return (
    <Layout>
      {github_data.loading && <p>LOADING...</p>}

      {!github_data.loading && (
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
