import axios, { AxiosInstance } from 'axios';

const axiosWithAuth = (): AxiosInstance => {
  const token = localStorage.getItem('github');

  return axios.create({
    headers: {
      authorization: `Bearer ${token}`,
    },
    baseURL: 'https://api.github.com/',
  });
};

export default axiosWithAuth;
