import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

//FortuneGod
import gallery1 from "@/assets/image-gallery/gallery-1.jpg";
import gallery2 from "@/assets/image-gallery/gallery-2.jpg";
import gallery3 from "@/assets/image-gallery/gallery-3.jpg";
import gallery4 from "@/assets/image-gallery/gallery-4.jpg";
import gallery5 from "@/assets/image-gallery/gallery-5.jpg";
import gallery6 from "@/assets/image-gallery/gallery-6.jpg";
import gallery7 from "@/assets/image-gallery/gallery-7.jpg";
import gallery8 from "@/assets/image-gallery/gallery-8.jpg";
import gallery9 from "@/assets/image-gallery/gallery-9.jpg";
import gallery10 from "@/assets/image-gallery/gallery-10.jpg";
import gallery11 from "@/assets/image-gallery/gallery-11.jpg";
import gallery12 from "@/assets/image-gallery/gallery-12.jpg";
import gallery13 from "@/assets/image-gallery/gallery-13.jpg";
import gallery14 from "@/assets/image-gallery/gallery-14.jpg";
import gallery15 from "@/assets/image-gallery/gallery-15.jpg";

//ShoPilipinas
import gallery16 from "@/assets/image-gallery/gallery-16.jpg";
import gallery17 from "@/assets/image-gallery/gallery-17.jpg";
import gallery18 from "@/assets/image-gallery/gallery-18.jpg";
import gallery19 from "@/assets/image-gallery/gallery-19.jpg";
import gallery20 from "@/assets/image-gallery/gallery-20.jpg";
import gallery21 from "@/assets/image-gallery/gallery-21.jpg";
import gallery22 from "@/assets/image-gallery/gallery-22.jpg";
import gallery23 from "@/assets/image-gallery/gallery-23.jpg";
import gallery24 from "@/assets/image-gallery/gallery-24.jpg";
import gallery25 from "@/assets/image-gallery/gallery-25.jpg";
import gallery26 from "@/assets/image-gallery/gallery-26.jpg";
import gallery27 from "@/assets/image-gallery/gallery-27.jpg";
import gallery28 from "@/assets/image-gallery/gallery-28.jpg";
import gallery29 from "@/assets/image-gallery/gallery-29.jpg";
import gallery30 from "@/assets/image-gallery/gallery-30.jpg";
import gallery31 from "@/assets/image-gallery/gallery-31.jpg";
import gallery32 from "@/assets/image-gallery/gallery-32.jpg";
import gallery33 from "@/assets/image-gallery/gallery-33.jpg";

const ChairMileStone = () => {
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(8);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const prevFilterRef = useRef("All");

  const galleryImg = [
    { src: gallery1, category: "FortuneGod" },
    { src: gallery2, category: "FortuneGod" },
    { src: gallery3, category: "FortuneGod" },
    { src: gallery4, category: "FortuneGod" },
    { src: gallery5, category: "FortuneGod" },
    { src: gallery6, category: "FortuneGod" },
    { src: gallery7, category: "FortuneGod" },
    { src: gallery8, category: "FortuneGod" },
    { src: gallery9, category: "FortuneGod" },
    { src: gallery10, category: "FortuneGod" },
    { src: gallery11, category: "FortuneGod" },
    { src: gallery12, category: "FortuneGod" },
    { src: gallery13, category: "FortuneGod" },
    { src: gallery14, category: "FortuneGod" },
    { src: gallery15, category: "FortuneGod" },

    { src: gallery16, category: "ShoPilipinas" },
    { src: gallery17, category: "ShoPilipinas" },
    { src: gallery18, category: "ShoPilipinas" },
    { src: gallery19, category: "ShoPilipinas" },
    { src: gallery20, category: "ShoPilipinas" },
    { src: gallery21, category: "ShoPilipinas" },
    { src: gallery22, category: "ShoPilipinas" },
    { src: gallery23, category: "ShoPilipinas" },
    { src: gallery24, category: "ShoPilipinas" },
    { src: gallery25, category: "ShoPilipinas" },
    { src: gallery26, category: "ShoPilipinas" },
    { src: gallery27, category: "ShoPilipinas" },
    { src: gallery28, category: "ShoPilipinas" },
    { src: gallery29, category: "ShoPilipinas" },
    { src: gallery30, category: "ShoPilipinas" },
    { src: gallery31, category: "ShoPilipinas" },
    { src: gallery32, category: "ShoPilipinas" },
    { src: gallery33, category: "ShoPilipinas" },
  ];

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
    setVisibleCount(prev => prev + 8);
    
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
        <Button
          className="mt-6"
          onClick={handleSeeMore}
        >
          See More
        </Button>
      )}
    </div>
  );
};

export default ChairMileStone;