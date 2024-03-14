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
  ] = `bear eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwaG9uZyIsImlhdCI6MTcxMDM5NDcxMywiZXhwIjoxNzEwNDgxMTEzfQ.JXio42ubCZDnXCdBTzaVh1lN_fwxUjz-OMGQSEmTzcUImJeqcaDXrizWfupLmmLWr_72UXB4L81T31pya18iGg`;
  return config;
};
const handleError = (error) => {
  console.log(error);
  return;
};
api.interceptors.request.use(handleBefore, null);
// api.interceptors.response.use(null, handleError);

export default api;
