import * as types from "./types";
import axios from "axios";

// INITIALIZES CLOCK ON SERVER
export const serverRenderClock = () => (dispatch) =>
  dispatch({
    type: types.TICK,
    payload: { light: false, ts: Date.now() },
  });

// INITIALIZES CLOCK ON CLIENT
export const startClock = () => (dispatch) =>
  setInterval(() => {
    dispatch({ type: types.TICK, payload: { light: true, ts: Date.now() } });
  }, 1000);

// INCREMENT COUNTER BY 1
export const incrementCount = () => ({ type: types.INCREMENT });

// DECREMENT COUNTER BY 1
export const decrementCount = () => ({ type: types.DECREMENT });

// RESET COUNTER
export const resetCount = () => ({ type: types.RESET });

export const fetchUser = (username) => async (dispatch) => {
  dispatch({ type: types.FETCH_USER_LOADING });
  try {
    const res = await axios.get(`https://api.github.com/users/${username}`);
    dispatch({ type: types.FETCH_USER_SUCCESS, payload: res.data });
  } catch (error) {
    console.error(error);
    dispatch({ type: types.FETCH_USER_FAILURE, payload: error });
  }
};

export const fetchUserFollowers = (username) => async (dispatch) => {
  dispatch({ type: types.FETCH_FOLLOWERS_LOADING });
  try {
    const res = await axios.get(
      `https://api.github.com/users/${username}/followers`
    );
    dispatch({ type: types.FETCH_FOLLOWERS_SUCCESS, payload: res.data });
  } catch (error) {
    console.error(error);
    dispatch({ type: types.FETCH_FOLLOWERS_FAILURE, payload: error });
  }
};

export const fetchRepos = (username) => async (dispatch) => {
  dispatch({ type: types.FETCH_REPOS_LOADING });
  try {
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=40&sort=updated&affiliation=owner,collaborator,organization_member`
    );
    dispatch({ type: types.FETCH_REPOS_SUCCESS, payload: res.data });
  } catch (error) {
    console.error(error);
    dispatch({ type: types.FETCH_REPOS_FAILURE, payload: error });
  }
};
