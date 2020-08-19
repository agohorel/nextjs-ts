import axios from 'axios';

export async function fetchToken() {
  let token = sessionStorage.getItem('github');

  if (!token) {
    const response = await axios.get('/api/githubAuth');
    sessionStorage.setItem('github', response.data.github_token);
  }
}
