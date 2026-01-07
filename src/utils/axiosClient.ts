import axios, { type AxiosInstance } from "axios";

// External News Api Clients
export const axiosClient: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL_DEVELOPMENT}`,
  timeout: 5000, // 5 seconds timeout
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true", // for development only remove in production
    // "Authorization": `Bearer ${import.meta.env.VITE_NEWS_API_KEY}`
  },
});
