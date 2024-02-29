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
  config.headers['Authorization'] = `bear eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJLaHVvbmciLCJpYXQiOjE3MDkxMjA0MTcsImV4cCI6MTcwOTIwNjgxN30.t02LiNHk6423uxWkkgJLWIhqhKUhSpjrqZUg8qkSy9mjF3tvy9exTuQgZ3ND7KSq9qUhd9GziFwOXVec80h5OA`;
  return config;
};
const handleError = error => {
  console.log(error);
  return;
};
api.interceptors.request.use(handleBefore, null);
// api.interceptors.response.use(null, handleError);

export default api;