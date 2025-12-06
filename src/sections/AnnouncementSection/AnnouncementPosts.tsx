import LoadingSpinner from "@/components/LoadingSpinner";
import { announcementData } from "@/constants";
import { lazy, Suspense } from "react";

const AnnouncementPosts = () => {
  const AnnouncementCards = lazy(
    () => import("@/components/AnnouncementCards")
  );
  return (
    <div className="w-full h-auto flex flex-col items-center">
      <h3 className="max-md:mt-15">Announcement</h3>

      <Suspense fallback={<LoadingSpinner />}>
        <section className="w-full h-auto grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 py-5 px-10 max-md:py-0 max-md:px-0 my-5">
          {announcementData.map((data) => (
            <AnnouncementCards key={data.id} data={data} />
          ))}
        </section>
      </Suspense>
    </div>
  );
};

export default AnnouncementPosts;
