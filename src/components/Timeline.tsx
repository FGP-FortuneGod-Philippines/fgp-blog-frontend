import { ChevronLeft, ChevronRight } from "lucide-react";
import { timeline } from "@/constants";

interface ScrollProps {
  scroll: (direction: "left" | "right") => void;
  scrollRef: React.RefObject<HTMLUListElement | null>;
}

const Timeline = ({ scroll, scrollRef }: ScrollProps) => {
  return (
    <div className="relative w-full">
      {/* Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-primary/10 z-10"
      >
        <ChevronLeft className="w-5 h-5 text-primary" />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-primary/10 z-10"
      >
        <ChevronRight className="w-5 h-5 text-primary" />
      </button>

      {/* Timeline */}
      <ul
        ref={scrollRef}
        className="timeline timeline-horizontal overflow-x-auto scrollbar-hide scroll-smooth px-10"
      >
        {timeline.map((item, index) => (
          <li key={index} className="flex-none w-full sm:w-1/2 lg:w-1/3">
            <hr className="bg-primary" />
            {index % 2 === 0 ? (
              <>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-primary h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box bg-white border-0 shadow-none text-center">
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </div>
              </>
            ) : (
              <>
                <div className="timeline-start timeline-box bg-white border-0 shadow-none text-center">
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-primary h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </>
            )}
            <hr className="bg-primary" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
