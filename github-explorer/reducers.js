import { combineReducers } from "redux";
import * as types from "./types";

// INITIAL GITHUB STATE
const initialGithubState = {
  loading: false,
  error: null,
  user: {},
  followers: [],
  repos: [],
  commits: [],
  random_user: {},
};

// GITHUB REDUCER
const githubReducer = (state = initialGithubState, { type, payload }) => {
  switch (type) {
    case types.FETCH_USER_LOADING:
    case types.FETCH_FOLLOWERS_LOADING:
    case types.FETCH_REPOS_LOADING:
    case types.FETCH_COMMITS_LOADING:
    case types.FETCH_RANDOM_USER_LOADING:
      return {
        ...state,
        loading: true,
      };

    case types.FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
      };

    case types.FETCH_FOLLOWERS_SUCCESS:
      return {
        ...state,
        loading: false,
        followers: payload,
      };

    case types.FETCH_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        repos: payload,
      };

    case types.FETCH_COMMITS_SUCCESS:
      return {
        ...state,
        loading: false,
        commits: payload,
      };

    case types.FETCH_RANDOM_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        random_user: payload,
      };

    case types.FETCH_USER_FAILURE:
    case types.FETCH_FOLLOWERS_FAILURE:
    case types.FETCH_REPOS_FAILURE:
    case types.FETCH_COMMITS_FAILURE:
    case types.FETCH_RANDOM_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

// COMBINED REDUCERS
const reducers = {
  github: githubReducer,
};

export default combineReducers(reducers);
