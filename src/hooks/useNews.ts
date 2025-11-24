import { useQuery } from "@tanstack/react-query";
import { fetchNews } from "@/api/news";

export const useNews = () => {
  return useQuery({
    queryKey: ["news"],
    queryFn: fetchNews,
    staleTime: 1000 * 60 * 10,
  });
};
