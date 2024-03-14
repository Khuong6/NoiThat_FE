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
  ] = `bear eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwaG9uZyIsImlhdCI6MTcxMDI1OTQyOSwiZXhwIjoxNzEwMzQ1ODI5fQ.-yRpQm9YLrSgZHJfHyFbik0EKv4WdwB5_gQeqeqYm8kaFUo8IVwOAP7dN6Myj4Cad7xSflq3D3duirHJv7RgJA`;
  return config;
};
const handleError = (error) => {
  console.log(error);
  return;
};
api.interceptors.request.use(handleBefore, null);
// api.interceptors.response.use(null, handleError);

export default api;
