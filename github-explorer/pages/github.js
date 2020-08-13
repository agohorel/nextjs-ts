import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser, fetchRepos, fetchUserFollowers } from "../actions";

import UserCard from "../components/UserCard";

const github = () => {
  const [username, setUsername] = useState("");
  const github_data = useSelector((state) => state.github);
  const dispatch = useDispatch();

  console.log(github_data);

  const handleInput = (e) => {
    setUsername(e.target.value);
  };

  const searchUser = async (username) => {
    dispatch(fetchUser(username));
    dispatch(fetchRepos(username));
    dispatch(fetchUserFollowers(username));
  };

  return (
    <div>
      <label>search for github user by username</label>
      <input id="username" onChange={handleInput} value={username}></input>
      <button onClick={() => searchUser(username)}>search</button>

      {github_data.loading && <p>LOADING...</p>}

      {github_data.user && <UserCard user={github_data.user}></UserCard>}
    </div>
  );
};

export default github;
