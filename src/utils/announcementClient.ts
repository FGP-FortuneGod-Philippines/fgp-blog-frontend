import { announcementData } from "@/constants";

export const fetchAllAnnouncements = (slug: string, id: string) => {
  return announcementData.find((data) => data.slug === slug && data.id === id);
};
