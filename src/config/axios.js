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
  ] = `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJraHVvbmciLCJpYXQiOjE3MDk3NzYyMTUsImV4cCI6MTcwOTg2MjYxNX0.D3LsYeSeF42uLPCfPF36R6o6ZA_RHBSpk4R4jWI4FmLiq_6L2qnosDURmh6VnSiJngpu8JYJYKMLYWhDYPz9kQ`;
  return config;
};
const handleError = (error) => {
  console.log(error);
  return;
};
api.interceptors.request.use(handleBefore, null);
// api.interceptors.response.use(null, handleError);

export default api;
