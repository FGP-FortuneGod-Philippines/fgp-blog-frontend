import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { slides } from "@/constants";
import Autoplay from "embla-carousel-autoplay";
import LazyImage from "./LazyImage";

const Banner = () => {
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 3000 })]}
      className="w-full border-none"
    >
      <CarouselContent className="border-none">
        {slides.map((slide, index) => (
          <CarouselItem key={index} className="border-none">
            <Card className="p-0 border-none">
              <CardContent className="relative aspect-video flex justify-center items-center border p-0 border-none shadow-none">
                <LazyImage
                  src={slide.img}
                  alt="placeholder"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-end px-4 pb-16 max-lg:pb-10 max-sm:pb-5">
                  <p className="text-white text-sm max-sm:text-xs max-xs:text-[8px] w-full opacity-70 leading-relaxed text-center">
                    {slide.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Banner;
