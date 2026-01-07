import { useNews } from "@/hooks/useNews";
import type { NewsProps } from "@/interfaces";
import LoadingSpinner from "@/components/LoadingSpinner";
import NewsCards from "@/components/NewsCards";
import illustration from "@/assets/newsIllustration.svg";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

const NewsSection = () => {
  const { data: news, isLoading, error } = useNews();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="w-full h-[50vh] flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-[60vh] flex flex-col items-center justify-center px-4 text-center space-y-8">
        <h3 className="max-md:mt-15">Latest News</h3>

        <img
          src={illustration}
          alt="Error illustration"
          className="w-full max-w-sm"
        />

        <p className="text-base sm:text-xl text-muted-foreground">
          We can’t get some news right now. Please try again later.
        </p>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center">
      <h3 className="max-md:mt-15">Latest News</h3>

      <section className="w-full grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 py-5 px-20 my-5 max-lg:px-10 max-md:px-4">
        {news?.length ? (
          news.map((data: NewsProps) => <NewsCards key={data.id} data={data} />)
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center text-center space-y-8 py-10">
            <img
              src={illustration}
              alt="No news illustration"
              className="w-full max-w-sm"
            />

            <p className="text-base sm:text-xl text-muted-foreground">
              No news available at the moment.
            </p>
            <Button onClick={() => navigate(-1)}>Go Back</Button>
          </div>
        )}
      </section>
    </div>
  );
};

export default NewsSection;
