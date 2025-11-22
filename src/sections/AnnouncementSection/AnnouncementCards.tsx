import { announcementData } from "@/constants";
import { LuFolderOpen } from "react-icons/lu";
import { LuClock4 } from "react-icons/lu";

const AnnouncementCards = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center">
      <h3>Announcement</h3>

      <section className="w-full h-auto grid grid-cols-3 gap-5 py-5 px-20 my-5">
        {announcementData
          ? announcementData.map((data) => (
              <div
                key={data.id}
                className="w-full h-auto flex flex-col gap-3 border"
              >
                {/* image */}
                <div className="w-full h-3/5">
                  <img
                    src={data.image}
                    alt={data.slug}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* details */}
                <div className="flex flex-col p-4 ">
                  <h6 className="mb-5">{data.title}</h6>
                  <p className="text-sm leading-5 line-clamp-2 mb-5">
                    {data.description}
                  </p>

                  <div className="flex gap-2 justify-start items-center">
                    <p className="text-xs text-[var(--gray-text)]">
                      {data.author}
                    </p>
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
            ))
          : null}
      </section>
    </div>
  );
};

export default AnnouncementCards;
