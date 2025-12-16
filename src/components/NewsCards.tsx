import type { NewsProps } from "@/interfaces";
import { formatDate } from "@/utils/formatDate";
import LazyImage from "./LazyImage";
import { Link } from "react-router";

const NewsCards = ({ data }: { data: NewsProps }) => {
  return (
    <div
      key={data.id}
      className="w-full h-auto flex flex-col gap-3 justify-between shadow-2xl rounded-md p-5 transition-transform duration-300 ease-out hover:-translate-y-3"
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
        <Link
          to={data.url}
          className="mb-5 line-clamp-2 text-lg font-semibold hover:text-[var(--hover-olive-text)]"
        >
          {data.title}
        </Link>
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
