import { useState } from "react";
import CoverflowCarousel from "@/components/jmr-components/CoverflowCarousel";
import LazyImage from "@/components/LazyImage";
import { JMRHeroImages } from "@/constants";

const JMRHero: React.FC = () => {
  // State to track the currently active slide in the mobile carousel
  const [activeIndex, setActiveIndex] = useState(1);

  
  //  Updates the activeIndex when the carousel slide changes. 
  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };

  // Keep track of which slide is active so we can hihlight or apply styles

  return (
    <div className="text-center mt-18 mx-10">
      {/* Hero heading */}
      <h3 className="text-2xl md:text-4xl font-semibold">
        Your Trusted Customs <br /> Brokerage Partner
      </h3>

      {/* Hero subtitle */}
      <p className="mt-2 text-sm md:text-base">
        <i>Fast. Reliable. Efficient</i>
      </p>

      {/* Desktop Grid */}
      <div className="hidden md:flex justify-center mt-5">
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-120 w-180">
          {JMRHeroImages.slice(0, 3).map((image, index) => {
            // Determine grid positioning: first image spans 2 rows
            const className =
              index === 0
                ? "col-span-1 row-span-2 h-full" // large image
                : "col-span-1 h-full";           // smaller images

            return (
              <div key={index} className={className}>
                <LazyImage
                  src={image.src}
                  alt={image.alt}
                  effect="blur"
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Coverflow Carousel */}
      <div className="block md:hidden mt-8 relative h-[500px]">
        <CoverflowCarousel startIndex={1} onSlideChange={handleSlideChange}>
          {JMRHeroImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`w-full h-full object-cover shadow-xl transition-opacity duration-300 ${
                index === activeIndex ? "opacity-100" : "opacity-60"
              }`}
            />
          ))}
        </CoverflowCarousel>
      </div>
    </div>
  );
};

export default JMRHero;
