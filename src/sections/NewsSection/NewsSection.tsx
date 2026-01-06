import { useNews } from "@/hooks/useNews";
import type { NewsProps } from "@/interfaces";
import LoadingSpinner from "@/components/LoadingSpinner";
import NewsCards from "@/components/NewsCards";

const NewsSection = () => {
  const { data: news, isLoading, error } = useNews();

  return (
    <div className="w-full h-auto flex flex-col items-center">
      <h3 className="max-md:mt-15">Latest News</h3>

      {isLoading && (
        <div className="flex justify-center items-center w-full h-[50vh]">
          <LoadingSpinner />
        </div>
      )}

      {error && (
        <div className="flex justify-center items-center w-full h-[50vh]">
          <p>We can't get some news right now, please try again later.</p>

          {/* Create seperate error handling illustrations for much better user experience */}
        </div>
      )}

      <section className="w-full h-auto grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 py-5 px-20 my-5 max-lg:px-10 max-md:px-2 max-lg:py-2">
        {news &&
          news.map((data: NewsProps) => (
            <NewsCards key={data.id} data={data} />
          ))}
      </section>
    </div>
  );
};

export default NewsSection;
