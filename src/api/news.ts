import axios from "axios";

export const fetchNews = async () => {
  const res = await axios.get(import.meta.env.VITE_NEWS_API);
  return res.data;
};
