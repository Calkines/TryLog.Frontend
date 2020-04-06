import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
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
    return apiClient.get("/events");
  },
  getLogs(itensPerPage, startPage) {
    return apiClient.get(`/events?_limit=${itensPerPage}&_page=${startPage}`);
  },
  registerUser(user) {
    return apiClient.post("/registerUser", user);
  }
};
