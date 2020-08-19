import axios, { AxiosInstance } from 'axios';

const axiosWithAuth = (): AxiosInstance => {
  let token = sessionStorage.getItem('github');

  return axios.create({
    headers: {
      authorization: `Bearer ${token}`,
    },
    baseURL: 'https://api.github.com/',
  });
};

export default axiosWithAuth;
