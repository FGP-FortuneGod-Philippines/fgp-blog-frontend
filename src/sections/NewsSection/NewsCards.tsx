// import { useNews } from "@/hooks/useNews";

import { newsData } from "@/constants";
import { formatDate } from "@/utils/formatDate";

const NewsCards = () => {
  // const { data } = useNews();
  // console.log("News data", data);

  return (
    <div className="w-full h-auto flex flex-col items-center">
      <h3>Latest News</h3>

      <section className="w-full h-auto grid grid-cols-3 gap-5 py-5 px-20 my-5">
        {newsData
          ? newsData.map((data) => (
              <div
                key={data.id}
                className="w-full h-auto flex flex-col gap-3 justify-between border rounded-md p-5"
              >
                {/* image */}
                <div className="w-full h-[13rem]">
                  <img
                    src={data.url}
                    alt={data.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* details */}
                <div className="flex flex-col p-4">
                  <h6 className="mb-5 line-clamp-2 text-lg">{data.title}</h6>
                  <p className="text-sm leading-5 line-clamp-2 mb-5">
                    {data.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <p className="text-xs text-[var(--gray-text)]">
                      {data.source.name}
                    </p>
                    <p className="text-xs text-[var(--gray-text)]">
                      {formatDate(data.publishedAt)}
                    </p>
                  </div>
                </div>
              </div>
            ))
          : null}
      </section>
    </div>
  );
};

export default NewsCards;
