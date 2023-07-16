import axios from "axios";
import config from "../config";

const api = axios.create({
  baseURL: config.serverBaseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");

  config.headers.Authorization = `Bearer ${String(token)}`;

  return config;
});

export default api;
