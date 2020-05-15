import axios from "axios";
axios.defaults.headers.common = {
  Authorization: `Bearer ${localStorage.getItem("user")}`,
};
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
  getLogs(itensPerPage, startPage, idEnvironments) {
    return apiClient.get(
      `/log?itemsPerPage=${itensPerPage}&pageStart=${startPage}&idsEnv=${idEnvironments}`
    );
  },
  getEnvironments() {
    return apiClient.get("/environment");
  },
  login(credentials) {
    return apiClient.post("/user/login", credentials);
  },
  singup(data) {
    return apiClient.post("/account", data);
  },
};
