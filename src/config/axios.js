import axios from "axios";
const baseUrl = "http://167.99.69.197:8081";

const config = {
  baseUrl,
  timeout: 3000000,
};
const api = axios.create(config);
api.defaults.baseURL = baseUrl;
const handleBefore = (config) => {
  const token = localStorage.getItem("token")?.replaceAll('"', "");
  config.headers[
    "Authorization"
  ] = `bear eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJLaHVvbmciLCJpYXQiOjE3MDk1MzU2MDUsImV4cCI6MTcwOTYyMjAwNX0.ZlqvSJK9I4mzUdFs2GwYT1UvF2B3uKsX-xN4plcOr_Y7qC3eEgvhYM7q_BNxl7PVX6w23-2lw-KJZKS94TORvg`;
  return config;
};
const handleError = (error) => {
  console.log(error);
  return;
};
api.interceptors.request.use(handleBefore, null);
// api.interceptors.response.use(null, handleError);

export default api;
