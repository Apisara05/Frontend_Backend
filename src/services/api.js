import axios from "axios";
import TokenService from "./token.services";
const baseURL = import.meta.env.VITE_BASE_URL;
const instance = axios.create({
  baseURL,
});

//ฟังก์ชั่นการดัก
instance.interceptors.request.use((config) => {
  const token = TokenService.getAccessToken();
  if (token) {
    config.headers["x-access-token"] = token; //ยัด token ใน headers ใน แอทิบิว x-access-token
  }
  return config;
});

export default instance;
