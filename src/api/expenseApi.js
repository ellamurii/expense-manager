import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:3000/data",
  delayed: true,
});

service.interceptors.request.use((config) => {
  if (config.delayed) {
    return new Promise((resolve) => setTimeout(() => resolve(config), 600));
  }
  return config;
});

export default service;
