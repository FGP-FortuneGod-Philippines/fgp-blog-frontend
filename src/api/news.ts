import type { NewsProps } from "@/interfaces";
import { axiosClient } from "../utils/axiosClient";
import axios from "axios";

export const fetchNews = async (): Promise<NewsProps[]> => {
  try {
    const response = await axiosClient.get(
      `${import.meta.env.VITE_NEWS_PATH}`,
      {
        params: {
          country: "ph",
          category: "general",
        },
      }
    );
    console.log(typeof response.data, response.data);

    // safety check to ensure response structure
    if (!response.data?.data) {
      throw new Error("Invalid API response");
    }

    console.log(typeof response.data, response.data);

    return response.data.data;
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
