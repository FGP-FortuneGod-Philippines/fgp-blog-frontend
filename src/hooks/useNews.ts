import { useQuery } from "@tanstack/react-query";
import { fetchNews } from "@/api/news";
import type { NewsProps } from "@/interfaces";

export const useNews = () => {
  return useQuery<NewsProps[], Error>({
    queryKey: ["news"],
    queryFn: fetchNews,
    staleTime: 1000 * 60 * 10, // 5 minutes caching
    retry: 2, // retry twice if request fails
    refetchOnWindowFocus: false, // don't refetch when user comes back to window
  });
};
