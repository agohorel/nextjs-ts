import { combineReducers } from "redux";
import * as types from "./types";

// INITIAL GITHUB STATE
const initialGithubState = {
  loading: false,
  error: null,
  user: {},
  followers: [],
  repos: [],
};

// GITHUB REDUCER
const githubReducer = (state = initialGithubState, { type, payload }) => {
  switch (type) {
    case types.FETCH_USER_LOADING:
    case types.FETCH_FOLLOWERS_LOADING:
    case types.FETCH_REPOS_LOADING:
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

    case types.FETCH_USER_FAILURE:
    case types.FETCH_FOLLOWERS_FAILURE:
    case types.FETCH_REPOS_FAILURE:
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
