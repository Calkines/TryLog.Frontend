import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/",
  //withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
apiClient.interceptors.request.use(req => {
  const keyUser = JSON.parse(localStorage.getItem("user"));
  const token = keyUser ? keyUser.token : "";
  req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default {
  getStatistics() {
    return apiClient.get("api/statistics");
  },
  getErrors() {
    return apiClient.get("api/errors");
  },
  getLogs() {
    return apiClient.get("api/logs");
  },
  getLogs(itensPerPage, startPage) {
    return apiClient.get(`api/logs?_limit=${itensPerPage}&_page=${startPage}`);
  },
  registerUser(user) {
    return apiClient.post("/auth/register", JSON.stringify(user));
  },
  realizarLogin(user) {
    return apiClient.post("/auth/login", JSON.stringify(user));
  }
};
