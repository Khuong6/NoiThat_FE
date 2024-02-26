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
  config.headers['Authorization'] = `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwaG9uZyIsImlhdCI6MTcwODkyMDU1MywiZXhwIjoxNzA5MDA2OTUzfQ.gzb3NdfQ7oY_QAL8y6xBAstCvbMXK5IH8b-P331jfM3HHn3A1oKDM0mIN2xY2RPumrCCElW0L9P8s-b1rL_QXA`;
  return config;
};
const handleError = error => {
  console.log(error);
  return;
};
api.interceptors.request.use(handleBefore, null);
// api.interceptors.response.use(null, handleError);

export default api;