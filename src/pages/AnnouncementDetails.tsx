import { fetchAllAnnouncements } from "@/utils/announcementClient";
import { Link, useParams } from "react-router";
import { Button } from "@/components/ui/button";
import { LuArrowLeft } from "react-icons/lu";
import { lazy, Suspense } from "react";
import NotFoundAnnouncement from "./NotFoundAnnouncement";
import LoadingSpinner from "@/components/LoadingSpinner";
const AnnouncementDetailsViews = lazy(
  () => import("@/components/AnnouncementDetailsViews")
);

const AnnouncementDetails = () => {
  const { slug, id } = useParams();

  // optimized it later on if we have a backend
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
        <Button variant="link" asChild>
          <Link to="/announcement" className="">
            <LuArrowLeft className="text-sm" /> Go back to announcement
          </Link>
        </Button>
      </div>

      {/* Announcement Details */}
      <Suspense fallback={<LoadingSpinner />}>
        <AnnouncementDetailsViews announcement={announcement} />
      </Suspense>
    </div>
  );
};

export default AnnouncementDetails;
