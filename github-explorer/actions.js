import * as types from "./types";
import axiosWithAuth from "./utils/axiosWithAuth";

export const fetchUser = (username) => async (dispatch) => {
  dispatch({ type: types.FETCH_USER_LOADING });
  try {
    const payload = await getUserData(username);
    dispatch({ type: types.FETCH_USER_SUCCESS, payload });
  } catch (error) {
    console.error(error);
    dispatch({ type: types.FETCH_USER_FAILURE, payload: error });
  }
};

export const fetchRandomUser = (router) => async (dispatch) => {
  dispatch({ type: types.FETCH_RANDOM_USER_LOADING });
  try {
    const random_index = Math.floor(Math.random() * 10000000);
    const res = await axiosWithAuth().get(`users?since=${random_index}`);
    const random_user = res.data[Math.floor(Math.random() * res.data.length)];

    const payload = await getUserData(random_user.login);

    dispatch({ type: types.FETCH_RANDOM_USER_SUCCESS, payload });

    router.push("/users/[username]", `/users/${random_user.login}`);
  } catch (error) {
    console.error(error);
    dispatch({ type: types.FETCH_RANDOM_USER_FAILURE, payload: error });
  }
};

export const clearCurrentUser = () => (dispatch) => {
  dispatch({ type: types.CLEAR_CURRENT_USER });
};

// helpers

async function getUserData(username) {
  const user = await axiosWithAuth().get(`users/${username}`);
  const followers = await axiosWithAuth().get(`users/${username}/followers`);
  const repos = await axiosWithAuth().get(
    `users/${username}/repos?per_page=40&sort=updated&affiliation=owner,collaborator,organization_member`
  );
  const events = await axiosWithAuth().get(`users/${username}/events`);
  const commits = countCommits(events.data, username);

  return {
    user: user.data,
    followers: followers.data,
    repos: repos.data,
    commits,
  };
}

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
