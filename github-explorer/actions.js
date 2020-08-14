import * as types from "./types";
import axiosWithAuth from "./utils/axiosWithAuth";

export const fetchUser = (username) => async (dispatch) => {
  dispatch({ type: types.FETCH_USER_LOADING });
  try {
    const res = await axiosWithAuth().get(
      `https://api.github.com/users/${username}`
    );
    dispatch({ type: types.FETCH_USER_SUCCESS, payload: res.data });
  } catch (error) {
    console.error(error);
    dispatch({ type: types.FETCH_USER_FAILURE, payload: error });
  }
};

export const fetchUserFollowers = (username) => async (dispatch) => {
  dispatch({ type: types.FETCH_FOLLOWERS_LOADING });
  try {
    const res = await axiosWithAuth().get(
      `https://api.github.com/users/${username}/followers`
    );
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
      `https://api.github.com/users/${username}/repos?per_page=40&sort=updated&affiliation=owner,collaborator,organization_member`
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
    const res = await axiosWithAuth().get(
      `https://api.github.com/users/${username}/events`
    );
    const commits = countCommits(res.data, username);
    dispatch({ type: types.FETCH_COMMITS_SUCCESS, payload: commits });
  } catch (error) {
    console.error(error);
    dispatch({ type: types.FETCH_COMMITS_FAILURE, payload: error });
  }
};

function countCommits(data, username) {
  const commits = data
    .filter(
      (event) => event.type === "PushEvent" && event.actor.login === username
    )
    .reduce((sum, push) => (sum += push.payload.commits.length), 0);

  return commits;
}
