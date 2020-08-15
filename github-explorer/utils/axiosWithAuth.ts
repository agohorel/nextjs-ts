import axios, { AxiosInstance } from "axios";
import config from "../config";

const axiosWithAuth = (): AxiosInstance => {
  return axios.create({
    headers: {
      authorization: `Bearer ${config.github_token}`,
    },
    baseURL: "https://api.github.com/",
  });
};

export default axiosWithAuth;
