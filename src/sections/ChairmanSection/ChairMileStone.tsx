import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { galleryImg } from "@/constants";

const ChairMileStone = () => {
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(8);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const prevFilterRef = useRef("All");

  const filteredImages =
    filter === "All"
      ? galleryImg
      : galleryImg.filter((img) => img.category === filter);

  const visibleImages = filteredImages.slice(0, visibleCount);

  useEffect(() => {
    if (prevFilterRef.current !== filter) {
      setVisibleCount(8);

      setShouldAnimate(true);

      const timer = setTimeout(() => {
        setShouldAnimate(false);
      }, 100);

      prevFilterRef.current = filter;
      return () => clearTimeout(timer);
    }
  }, [filter]);

  const handleSeeMore = () => {
    setShouldAnimate(true);
    setVisibleCount((prev) => prev + 8);

    setTimeout(() => {
      setShouldAnimate(false);
    }, 100);
  };

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  return (
    <div className="w-full h-auto flex flex-col items-center my-10 max-md:my-5">
      <h3 className="my-10 max-md:my-5">Chairman Milestone</h3>

      <div className="flex gap-4 mb-6 flex-wrap justify-center">
        {["All", "FortuneGod", "ShoPilipinas"].map((cat) => (
          <Button
            key={cat}
            variant={filter === cat ? "default" : "outline"}
            onClick={() => handleFilterChange(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      <div className="w-full lg:w-[65rem] columns-1 sm:columns-3 lg:columns-4 gap-4 space-y-4">
        {visibleImages.map((img, index) => (
          <div
            key={`${filter}-${img.src}-${index}`}
            className={`break-inside-avoid overflow-hidden ${
              shouldAnimate ? "fade-in" : ""
            }`}
          >
            <img
              src={img.src}
              alt={`gallery-${index}`}
              className="w-full h-auto object-cover transition-transform duration-500 ease-out hover:scale-110"
            />
          </div>
        ))}
      </div>

      {visibleCount < filteredImages.length && (
        <Button className="mt-6" onClick={handleSeeMore}>
          See More
        </Button>
      )}
    </div>
  );
};

export default ChairMileStone;
