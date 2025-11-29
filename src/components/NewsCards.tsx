import type { NewsProps } from "@/interfaces";
import { formatDate } from "@/utils/formatDate";
import LazyImage from "./LazyImage";

const NewsCards = ({ data }: { data: NewsProps }) => {
  return (
    <div
      key={data.id}
      className="w-full h-auto flex flex-col gap-3 justify-between border rounded-md p-5"
    >
      {/* image */}
      <div className="w-full h-[13rem]">
        <LazyImage
          src={data.image}
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
          <p className="text-xs text-[var(--gray-text)]">{data.source.name}</p>
          <p className="text-xs text-[var(--gray-text)]">
            {formatDate(data.publishedAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCards;
