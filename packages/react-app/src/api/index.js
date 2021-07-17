import axios from "axios";
import queryString from "query-string";
import config from "../../config";

// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request- config` for the full list of configs
const axiosClient = axios.create({
  baseURL: config.dev.env.ROOT_API,
  headers: {
    "content-type": "application/json"
  },
  paramsSerializer: params => queryString.stringify(params)
});

axiosClient.interceptors.request.use(async config => {
  let token = localStorage.getItem("user-token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosClient.interceptors.response.use(
  response => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  error => {
    // Handle errors
    throw error;
  }
);

export default axiosClient;