import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_URL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getStatistics() {
    return apiClient.get("/statistic");
  },
  getErrors() {
    return apiClient.get("/error");
  },
  getLogs() {
    return apiClient.get("/log");
  },
  getLogs(itensPerPage, startPage) {
    return apiClient.get(`/log?_limit=${itensPerPage}&_page=${startPage}`);
  },
  login() {
    return apiClient.get("/auth");
  },
};
