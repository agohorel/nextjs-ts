import { combineReducers } from "redux";
import * as types from "./types";

// COUNTER REDUCER
const counterReducer = (state = 0, { type }) => {
  switch (type) {
    case types.INCREMENT:
      return state + 1;
    case types.DECREMENT:
      return state - 1;
    case types.RESET:
      return 0;
    default:
      return state;
  }
};

// INITIAL TIMER STATE
const initialTimerState = {
  lastUpdate: 0,
  light: false,
};

// TIMER REDUCER
const timerReducer = (state = initialTimerState, { type, payload }) => {
  switch (type) {
    case types.TICK:
      return {
        lastUpdate: payload.ts,
        light: !!payload.light,
      };
    default:
      return state;
  }
};

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
  counter: counterReducer,
  timer: timerReducer,
  github: githubReducer,
};

export default combineReducers(reducers);
