import axios from 'axios';
const baseUrl = 'http://167.99.69.197:8081';

const config = {
  baseUrl,
  timeout: 3000000,
};
const api = axios.create(config);
api.defaults.baseURL = baseUrl;
const handleBefore = config => {
  const token = localStorage.getItem('token')?.replaceAll('"', '');
  config.headers['Authorization'] = `bear eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJLaHVvbmciLCJpYXQiOjE3MDk3MjAxNDIsImV4cCI6MTcwOTgwNjU0Mn0.xyj3wcflEKVXnK_QQdGiqjzKqu1kRy6bZlPFGxQOTEv3On6JkgjLi-Hoj0LUBiwNlJadRTaBZBDFWK3syZq0SA`;
  return config;
};
const handleError = error => {
  console.log(error);
  return;
};
api.interceptors.request.use(handleBefore, null);
// api.interceptors.response.use(null, handleError);

export default api;