import { timelineData } from "@/constants/contents";
import diamond from "../assets/diamond.png";
import TimelineItem from "./timeline/TimelineItem";
import TimelineItemBottom from "./timeline/TimelineItemBottom";
import { Button } from "./ui/button";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import type { TimelineProps } from "@/interfaces/contents";

const Timeline = ({
  handlePrev,
  handleNext,
  translateX,
  itemWidth,
  currentIndex,
  setCurrentIndex,
  maxIndex,
  itemsPerPage,
}: TimelineProps) => {
  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Wrapper */}
      <div className="relative">
        {/* Left Button */}
        <Button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          aria-label="Previous"
          className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-10 
          bg-trasparent text-[#584910] hover:bg-transparent"
        >
          <LuArrowLeft className="text-2xl size-auto" />
        </Button>

        {/* Right Button */}
        <Button
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
          aria-label="Next"
          className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-10
          bg-trasparent text-[#584910] hover:bg-transparent"
        >
          <LuArrowRight className="text-2xl size-auto" />
        </Button>

        {/* TOP CONTENT */}
        <div className="overflow-hidden">
          <div
            className="flex mb-6 sm:mb-8 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${translateX}%)` }}
          >
            {timelineData.map((item) => (
              <TimelineItem key={item.id} item={item} width={itemWidth} />
            ))}
          </div>

          {/* LINE + DOTS */}
          <div className="relative">
            <div
              className="absolute top-1/2 left-0 -translate-y-1/2 h-0.5 bg-[#584910]"
              style={{
                width: `${(100 / itemsPerPage) * timelineData.length}%`,
              }}
            />

            <div
              className="flex items-center transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${translateX}%)` }}
            >
              {timelineData.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 flex justify-center"
                  style={{ width: itemWidth }}
                >
                  <div className="w-7 h-7 rounded-full bg-[#584910] flex items-center justify-center">
                    <img src={diamond} alt="diamond icon" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM CONTENT */}
          <div
            className="flex mt-6 sm:mt-8 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${translateX}%)` }}
          >
            {timelineData.map((item) => (
              <TimelineItemBottom key={item.id} item={item} width={itemWidth} />
            ))}
          </div>
        </div>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center gap-2 mt-6 sm:mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentIndex === index
                ? "bg-[#584910] w-6"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
