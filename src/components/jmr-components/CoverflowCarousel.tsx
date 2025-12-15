import type { ReactNode } from "react";
import { useState, useCallback } from "react";

interface CoverflowCarouselProps {
  children: ReactNode[];
  startIndex?: number;
  onSlideChange?: (index: number) => void;
}

const CoverflowCarousel: React.FC<CoverflowCarouselProps> = ({
  children,
  startIndex = 1,
  onSlideChange,
}) => {
  const slides = children;
  const [current, setCurrent] = useState(startIndex);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in pixels)
  const minSwipeDistance = 30;

  const prevSlide = useCallback(() => {
    setCurrent((prev) => {
      const newIndex = prev === 0 ? slides.length - 1 : prev - 1;
      onSlideChange?.(newIndex);
      return newIndex;
    });
  }, [slides.length, onSlideChange]);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => {
      const newIndex = prev === slides.length - 1 ? 0 : prev + 1;
      onSlideChange?.(newIndex);
      return newIndex;
    });
  }, [slides.length, onSlideChange]);

  // Touch handlers for swipe gestures
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  // Calculate coverflow transformations
  const getTransform = (index: number) => {
    const offset = index - current;
    
    if (offset === 0) { // Center (active) slide
      return {
        transform: "translateX(0%) scale(1)",
        zIndex: 10,
        opacity: 1,
        filter: "brightness(1)"
      };
    }
    
    if (offset === -1) { // Left side slide
      return {
        transform: "translateX(-85%) scale(0.85) rotateY(20deg)",
        zIndex: 5,
        opacity: 0.7,
        filter: "brightness(0.8)"
      };
    }
    
    if (offset === 1) { // Right side slide
      return {
        transform: "translateX(85%) scale(0.85) rotateY(-20deg)",
        zIndex: 5,
        opacity: 0.7,
        filter: "brightness(0.8)"
      };
    }
    
    // For 3 images, these are the far slides (wrap-around effect)
    if (offset === 2 || offset === -2) {
      // Handle wrap-around positions
      if (current === 1) {
        if (index === 2) { // Right-most from center
          return {
            transform: "translateX(170%) scale(0.7) rotateY(-30deg)",
            zIndex: 1,
            opacity: 0.4,
            filter: "brightness(0.6)"
          };
        }
        if (index === 0) { // Left-most from center
          return {
            transform: "translateX(-170%) scale(0.7) rotateY(30deg)",
            zIndex: 1,
            opacity: 0.4,
            filter: "brightness(0.6)"
          };
        }
      }
      
      // Handle other scenarios
      return {
        transform: `translateX(${offset > 0 ? '170%' : '-170%'}) scale(0.7) rotateY(${offset > 0 ? '-30' : '30'}deg)`,
        zIndex: 1,
        opacity: 0.4,
        filter: "brightness(0.6)"
      };
    }
    
    // Default fallback
    return {
      transform: `translateX(${offset * 85}%) scale(0.85)`,
      zIndex: 0,
      opacity: 0.3,
      filter: "brightness(0.5)"
    };
  };

  return (
    <div className="flex flex-col items-center">
      {/* Carousel Container */}
      <div 
        className="relative w-full h-72 flex items-center justify-center overflow-hidden touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {slides.map((slide, idx) => {
          const transform = getTransform(idx);
          
          return (
            <div
              key={idx}
              className="absolute transition-all duration-500 ease-out will-change-transform cursor-pointer"
              style={{
                ...transform,
                width: "70%",
                height: "90%"
              }}
              onClick={() => {
                if (idx < current) prevSlide();
                if (idx > current) nextSlide();
              }}
            >
              {slide}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoverflowCarousel;