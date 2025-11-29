import type { NewsApiResponse, NewsProps } from "@/interfaces";
import { axiosClient } from "../utils/axiosClient";
import axios from "axios";

export const fetchNews = async (): Promise<NewsProps[]> => {
  try {
    const response = await axiosClient.get<NewsApiResponse>("");
    return response.data.articles;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error fetching news: ", error.message);
      throw new Error("Failed to fetch news from API");
    } else {
      console.error("Unexpected error: ", error);
      throw new Error("An unexpected error occurred");
    }
  }
};
