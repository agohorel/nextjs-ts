import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../actions";

const github = () => {
  const [username, setUsername] = useState("");
  const github_data = useSelector((state) => state.github);
  const dispatch = useDispatch();

  console.log(github_data);

  const handleInput = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div>
      <label>search for github user by username</label>
      <input id="username" onChange={handleInput} value={username}></input>
      <button onClick={() => dispatch(fetchUser(username))}>search</button>

      {github_data.loading && <p>LOADING...</p>}

      {github_data.response && <p>{github_data.response.name}</p>}
    </div>
  );
};

export default github;
