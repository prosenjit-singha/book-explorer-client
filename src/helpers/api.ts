import axios from "axios";
import config from "../config";

const api = axios.create({
  baseURL: config.serverBaseURL,
});

export default api;
