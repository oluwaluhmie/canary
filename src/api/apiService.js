import axios from "axios";

const api = axios.create({
  baseURL: "https://api.canaryfinance.canarypointfcl.com/v1/api/",
});

export default api;
