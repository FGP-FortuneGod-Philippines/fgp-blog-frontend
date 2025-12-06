import type { AnnouncementProps } from "@/interfaces";
import { LuUser, LuFolderOpen } from "react-icons/lu";

const AnnouncementDetailsViews = ({
  announcement,
}: {
  announcement: AnnouncementProps;
}) => {
  return (
    <div className="w-full flex flex-col gap-5 py-4 px-6">
      {/* Announcement Header */}
      <div className="w-full h-auto flex justify-between items-start gap-5">
        <div className="w-full flex flex-col gap-5">
          <div className="flex flex-col gap-2 p-3">
            {/* Soon to limit text inside this is meant only for title  */}
            <h1 className="text-3xl font-semibold font-sans tex-wrap">
              {announcement.title}
            </h1>

            {/* Additional Information */}
            <div className="flex justify-start items-center gap-1">
              <LuUser className="text-sm" />
              <p className="text-xs">{announcement.created_at}</p>
            </div>
          </div>

          {/* Soon to limit text inside this just like the title this is only for description  */}
          <div className="flex flex-col justify-between gap-5 p-3">
            <p>{announcement.description}</p>

            {/* Tags */}
            <div className="w-full h-auto flex flex-col">
              <div className="flex justify-start items-center gap-1">
                <LuUser className="text-sm" />
                <p className="text-xs">{announcement.author}</p>
              </div>

              <div className="flex justify-start items-center gap-1">
                <LuFolderOpen className="text-sm" />
                <p className="text-xs">{announcement.tags.join(" // ")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image is 1440 x 400 px */}
        <div className="w-[90rem] h-[25rem]">
          <img
            src={announcement.image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Announcement Body */}
    </div>
  );
};

export default AnnouncementDetailsViews;
