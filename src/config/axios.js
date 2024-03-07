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
  ] = `bear eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJraHVvbmciLCJpYXQiOjE3MDk3ODM0NzcsImV4cCI6MTcwOTg2OTg3N30.UkOyB6jl9jlCz48cHozlfYKStYwlUmurRF52GJFOjWgeZ1_k6vC0GLxh58CF-QIAYGWWrGN365poS9CqqP0E2g`;
  return config;
};
const handleError = (error) => {
  console.log(error);
  return;
};
api.interceptors.request.use(handleBefore, null);
// api.interceptors.response.use(null, handleError);

export default api;
