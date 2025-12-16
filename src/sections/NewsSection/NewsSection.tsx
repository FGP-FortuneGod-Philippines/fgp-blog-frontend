import { useNews } from "@/hooks/useNews";
import type { NewsProps } from "@/interfaces";
import LoadingSpinner from "@/components/LoadingSpinner";
import NewsCards from "@/components/NewsCards";

const NewsSection = () => {
  const { data: news, isLoading, error } = useNews();

  return (
    <div className="w-full h-auto flex flex-col items-center">
      <h3>Latest News</h3>

      {isLoading && (
        <div className="flex justify-center items-center w-full h-[50vh]">
          <LoadingSpinner />
        </div>
      )}

      {error && (
        <div className="flex justify-center items-center w-full h-[50vh]">
          Error: {(error as Error).message}
        </div>
      )}

      <section className="w-full h-auto grid grid-cols-3 gap-5 py-5 px-20 my-5">
        {news &&
          news.map((data: NewsProps) => (
            <NewsCards key={data.id} data={data} />
          ))}
      </section>
    </div>
  );
};

export default NewsSection;
