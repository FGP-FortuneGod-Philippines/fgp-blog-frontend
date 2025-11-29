import axios, { type AxiosInstance } from "axios";

// External News Api Clients
export const axiosClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_NEWS_API,
  timeout: 5000, // 5 seconds timeout
  headers: {
    "Content-Type": "application/json",
    // "Authorization": `Bearer ${import.meta.env.VITE_NEWS_API_KEY}`
  },
});
