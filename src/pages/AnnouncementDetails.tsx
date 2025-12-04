import { fetchAllAnnouncements } from "@/utils/announcementClient";
import { Link, useParams } from "react-router";
import NotFoundAnnouncement from "./NotFoundAnnouncement";
import { Button } from "@/components/ui/button";
import { LuArrowLeft } from "react-icons/lu";

const AnnouncementDetails = () => {
  const { slug, id } = useParams();

  const announcement = fetchAllAnnouncements(slug ?? "", id ?? "");

  // Handle case when announcement is not found
  if (!announcement) {
    return (
      <div>
        <NotFoundAnnouncement />
      </div>
    );
  }

  return (
    <div className="wrapper h-auto flex flex-col gap-5">
      {/* Go back to announcement */}
      <div className="w-full py-4 px-6">
        <Button variant="link" className="">
          <LuArrowLeft className="text-sm" />

          <Link to="/announcement">Go back to announcement</Link>
        </Button>
      </div>

      {/* Announcement Details */}
      <div className="w-full border flex flex-col gap-5 py-4 px-6"></div>
    </div>
  );
};

export default AnnouncementDetails;
