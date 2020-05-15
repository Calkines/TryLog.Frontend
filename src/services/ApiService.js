import axios from "axios";

// axios.defaults.headers.common = {
//    Authorization: `Bearer ${localStorage.getItem("user")}`
// };
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
    return apiClient.get("/statistic", {
      headers: { Authorization: `Bearer ${localStorage.getItem("user")}` },
    });
  },
  getErrors() {
    return apiClient.get("/error", {
      headers: { Authorization: `Bearer ${localStorage.getItem("user")}` },
    });
  },
  getLogs() {
    return apiClient.get("/log", {
      headers: { Authorization: `Bearer ${localStorage.getItem("user")}` },
    });
  },
  getLogs(itensPerPage, startPage, idEnvironments, query) {
    return apiClient.get(
      `/log?itemsPerPage=${itensPerPage}&pageStart=${startPage}&idsEnv=${idEnvironments}&search=${query}`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("user")}` },
      }
    );
  },
  getEnvironments() {
    return apiClient.get("/environment", {
      headers: { Authorization: `Bearer ${localStorage.getItem("user")}` },
    });
  },
  login(credentials) {
    return apiClient.post("/user/login", credentials, {
      headers: { Authorization: `Bearer ${localStorage.getItem("user")}` },
    });
  },
  singup(data) {
    return apiClient.post("/account", data, {
      headers: { Authorization: `Bearer ${localStorage.getItem("user")}` },
    });
  },
};
