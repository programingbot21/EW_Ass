import axios from "axios";

const API_BASE_URL = "http://localhost:7001/api";

const API = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;