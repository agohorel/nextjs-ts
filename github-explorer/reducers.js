import { combineReducers } from "redux";
import * as types from "./types";

const initialGithubState = {
  loading: false,
  error: null,
  user: {},
  followers: [],
  repos: [],
  commits: [],
};

const githubReducer = (state = initialGithubState, { type, payload }) => {
  switch (type) {
    case types.FETCH_USER_LOADING:
    case types.FETCH_RANDOM_USER_LOADING:
      return {
        ...state,
        loading: true,
      };

    case types.FETCH_USER_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      };

    case types.FETCH_RANDOM_USER_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      };

    case types.FETCH_USER_FAILURE:
    case types.FETCH_RANDOM_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case types.CLEAR_CURRENT_USER:
      return {
        ...state,
        user: {},
        followers: [],
        repos: [],
        commits: [],
      };

    default:
      return state;
  }
};

const reducers = {
  github: githubReducer,
};

export default combineReducers(reducers);
