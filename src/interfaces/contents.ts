export interface AboutProps {
  content: string;
}

export interface ContentProps {
  overviewHeader: string;
  overviewBody: string;
  overviewFooter: string;
}

export interface MissionVissionProps {
  mission: string;
  vission: string;
}

export interface BusinessModelProps {
  contentHeader: string;
  contentList: string[];
  contentFooter: string;
}

export interface TimelineItemsProps {
  id: number;
  title: string;
  organization: string;
  position: "top" | "bottom";
}

export interface TimelineProps {
  handlePrev: () => void;
  handleNext: () => void;
  translateX: number;
  itemWidth: string;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  maxIndex: number;
  itemsPerPage: number;
}
