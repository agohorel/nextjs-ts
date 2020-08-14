import axios from "axios";
import config from "../config";

const axiosWithAuth = () => {
  return axios.create({
    headers: {
      authorization: config.github_token,
    },
    baseURL: "https://api.github.com/",
  });
};

export default axiosWithAuth;
