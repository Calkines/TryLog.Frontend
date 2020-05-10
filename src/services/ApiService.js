import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_URL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getStatistics() {
    return apiClient.get("/statistics");
  },
  getErrors() {
    return apiClient.get("/errors");
  },
  getLogs() {
    return apiClient.get("/logs");
  },
  getLogs(itensPerPage, startPage) {
    return apiClient.get(`/logs?_limit=${itensPerPage}&_page=${startPage}`);
  }
};
