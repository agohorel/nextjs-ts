import * as types from "./types";
import axiosWithAuth from "./utils/axiosWithAuth";

export const fetchUser = (username) => async (dispatch) => {
  dispatch({ type: types.FETCH_USER_LOADING });
  try {
    const res = await axiosWithAuth().get(`users/${username}`);
    dispatch({ type: types.FETCH_USER_SUCCESS, payload: res.data });
  } catch (error) {
    console.error(error);
    dispatch({ type: types.FETCH_USER_FAILURE, payload: error });
  }
};

export const fetchUserFollowers = (username) => async (dispatch) => {
  dispatch({ type: types.FETCH_FOLLOWERS_LOADING });
  try {
    const res = await axiosWithAuth().get(`users/${username}/followers`);
    dispatch({ type: types.FETCH_FOLLOWERS_SUCCESS, payload: res.data });
  } catch (error) {
    console.error(error);
    dispatch({ type: types.FETCH_FOLLOWERS_FAILURE, payload: error });
  }
};

export const fetchUserRepos = (username) => async (dispatch) => {
  dispatch({ type: types.FETCH_REPOS_LOADING });
  try {
    const res = await axiosWithAuth().get(
      `users/${username}/repos?per_page=40&sort=updated&affiliation=owner,collaborator,organization_member`
    );
    dispatch({ type: types.FETCH_REPOS_SUCCESS, payload: res.data });
  } catch (error) {
    console.error(error);
    dispatch({ type: types.FETCH_REPOS_FAILURE, payload: error });
  }
};

export const fetchUserCommits = (username) => async (dispatch) => {
  dispatch({ type: types.FETCH_COMMITS_LOADING });
  try {
    const res = await axiosWithAuth().get(`users/${username}/events`);
    const commits = countCommits(res.data, username);
    dispatch({ type: types.FETCH_COMMITS_SUCCESS, payload: commits });
  } catch (error) {
    console.error(error);
    dispatch({ type: types.FETCH_COMMITS_FAILURE, payload: error });
  }
};

function countCommits(data, username) {
  const pushes = data.filter(
    (event) => event.type === "PushEvent" && event.actor.login === username
  );

  const commits = pushes.reduce(
    (sum, push) => (sum += push.payload.commits.length),
    0
  );

  const repos = pushes.reduce((all, push) => {
    all[push.repo.id] = push.repo.url;
    return all;
  }, {});

  return { commits, repos };
}

export const fetchRandomUser = () => async (dispatch) => {
  dispatch({ type: types.FETCH_RANDOM_USER_LOADING });
  try {
    const random_index = Math.floor(Math.random() * 10000000);
    const res = await axiosWithAuth().get(`users?since=${random_index}`);
    const random_user = res.data[Math.floor(Math.random() * res.data.length)];
    dispatch({ type: types.FETCH_RANDOM_USER_SUCCESS, payload: random_user });
  } catch (error) {
    console.error(error);
    dispatch({ type: types.FETCH_RANDOM_USER_FAILURE, payload: error });
  }
};
