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
  config.headers['Authorization'] = `bear eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwaG9uZyIsImlhdCI6MTcwOTEwMzI4NiwiZXhwIjoxNzA5MTg5Njg2fQ.xdR1MqsdPVn4zPaXiXkFpHm19eAmU6aDdWVdDSWaW-B-LhG70t0JNn5EoNyriegpgjFbOjd0CjwOsX3wRj6XHw`;
  return config;
};
const handleError = error => {
  console.log(error);
  return;
};
api.interceptors.request.use(handleBefore, null);
// api.interceptors.response.use(null, handleError);

export default api;