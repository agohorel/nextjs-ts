import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../../actions";
import { useRouter } from "next/router";

import Layout from "../../components/layout/Layout";
import UserCard from "../../components/UserCard";
import Followers from "../../components/followers/Followers";
import Loader from "../../components/layout/Loader";

const users = ({ toggleTheme }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const githubData = useSelector((state) => state.github);
  const username = router.query.username;

  // fetch user from path only if no existing data for user
  useEffect(() => {
    if (username && githubData.user.login !== username) {
      dispatch(fetchUser(username));
    }
  }, [username]);

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
