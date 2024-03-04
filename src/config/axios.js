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
  ] = `bear eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJLaHVvbmciLCJpYXQiOjE3MDk0NzgxODMsImV4cCI6MTcwOTU2NDU4M30.sWRpv9WYA4g4Gmyu7l-LICOyzdmjOmnwb4C3lvVlokKKzHYiB7mIEGwudfwo81BZPir-MPrQ4CQ4fKB2bSwtTQ`;
  return config;
};
const handleError = (error) => {
  console.log(error);
  return;
};
api.interceptors.request.use(handleBefore, null);
// api.interceptors.response.use(null, handleError);

export default api;
