import axios from "axios";
import url from "config/configUrl";

const getToken = () => {
  const token = window.localStorage.getItem("Bearer");
  return token;
};

axios.interceptors.request.use(
  (config) => {
    config.baseURL = url.base_url;

    if (!config.headers["Content-Type"]) {
      config.headers.Accept = "application/json";
      config.headers["Content-Type"] = "application/json";
    }

    config.headers.Authorization = `Bearer ${getToken()}`;

    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
