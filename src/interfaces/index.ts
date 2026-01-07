import type { IconType } from "react-icons";
import type { Effect } from "react-lazy-load-image-component";

export interface NavLink {
  path: string;
  label: string;
  scrollTo?: string;
}

export interface Engagement {
  label: string;
  count: number;
}

export interface OfferCards {
  src: string;
  alt: string;
  label: string;

  banner: string;
  bannerAlt: string;
  featImg: string;
  featImgAlt: string;
  title: string;
  description: string;

  extension?: boolean;
}

export interface CoreValues {
  icon?: IconType;
  title: string;
  description?: string;
}

export interface Accordion {
  title: string;
  description: string;
  item: string;
}

export interface MeetTeamProps {
  name: string;
  position: string;
  image: string;
  email?: string;
  facebook?: string;
  linkedin?: string;
}

export interface BannerSlidesProps {
  img: string;
  description?: string;
}

export interface BiographyProps {
  label: string;
  description: string;
}

export interface AwardsProps {
  label: string;
  description: string;
}

export interface QualificationProps {
  title: string;
  description: string;
}

export interface AnnouncementProps {
  id: string;
  title: string;
  description: string;
  author: string;
  created_at: string;
  tags: string[];
  slug: string;
  image: string;
}

export interface NewsSource {
  name: string;
}

export interface NewsProps {
  id: string;
  image: string;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  source: NewsSource;
}

export interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  effect?: Effect; // "blur" | "black-and-white" | "opacity"
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export interface NewsApiResponse {
  status: boolean;
  data: NewsProps[];
}

export interface PartnershipProps {
  label: string;
  src: string;
  path: string;
  alt: string;
}

//why choose us section interface
export interface WhyChooseUsProps {
  icon: string;
  title: string;
  description: string;
}

//logo marquee interface
export interface LogoMarqueeProps {
  label: string;
  src: string;
  alt: string;
}

//chairman milestone gallery interface
export interface ChairmanMilestonesProps {
  src: string;
  alt: string;
  category: string;
}

//project card image
export interface JMRProjectImage {
  src: string;
  alt: string;
}

//interface for the project cards
export interface JMRProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  align: "left" | "right";
  images: JMRProjectImage[];
}

// Interface for individual project
export interface JMRProject {
  name: string;
  image: string;
  alt: string;
}

// Interface for project category
export interface JMRProjectCategory {
  category: string;
  projects: JMRProject[];
}
