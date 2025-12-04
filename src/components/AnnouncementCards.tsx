import type { AnnouncementProps } from "@/interfaces";
import { LuFolderOpen, LuClock4, LuArrowLeft } from "react-icons/lu";
import { Link } from "react-router";

const AnnouncementCards = ({ data }: { data: AnnouncementProps }) => {
  return (
    <div
      key={data.id}
      className="w-full h-auto flex flex-col gap-3 justify-start border"
    >
      {/* Image */}
      <div className="w-full h-[18rem] cursor-pointer relative group">
        <img
          src={data.image}
          alt={data.slug}
          className="w-full h-full object-cover"
        />

        <p className="absolute left-2 top-2 z-10 text-[var(--white-text)] text-sm capitalize text-wrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {data.tags.join(" , ")}
        </p>

        <Link
          to={`/announcement/${data.slug}/${data.id}`}
          className="absolute inset-0 p-5 bg-black opacity-0 group-hover:opacity-75 flex flex-col items-center justify-center transition-opacity duration-300"
        >
          <LuArrowLeft className="text-2xl text-[var(--white-text)] mb-3" />
        </Link>
      </div>

      {/* Details */}
      <div className="flex flex-col p-4 h-full justify-between flex-1">
        <div className="w-full flex flex-col gap-5 mb-5 ">
          <Link
            to={`/announcement/${data.slug}/${data.id}`}
            className="cursor-pointer font-semibold hover:text-[var(--hover-olive-text)]"
          >
            {data.title}
          </Link>
          <div className="flex flex-col gap-1">
            <p className="text-sm leading-5 line-clamp-2">{data.description}</p>

            <Link
              to={`/announcement/${data.slug}/${data.id}`}
              className="text-xs text-[var(--blue-text)] hover:text-[var(--hover-blue-text)] cursor-pointer w-fit"
            >
              Read More...
            </Link>
          </div>
        </div>

        <div className="flex gap-2 justify-start items-center">
          <p className="text-xs text-[var(--gray-text)]">{data.author}</p>
          <p className="text-xs text-[var(--gray-text)]">
            <span className="flex gap-2 justify-start items-center">
              <LuClock4 className="text-sm" />
              {data.created_at}
            </span>
          </p>
        </div>

        {data.tags && (
          <p className="text-xs text-[var(--gray-text)] leading-3">
            <span className="flex gap-2 justify-start items-center">
              <LuFolderOpen className="text-sm" />
              {data.tags.join(" // ")}
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default AnnouncementCards;
