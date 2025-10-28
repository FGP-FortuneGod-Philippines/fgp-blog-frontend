import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { slides } from "@/constants";
import Autoplay from "embla-carousel-autoplay";

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
                <img
                  src={slide.img}
                  alt="placeholder"
                  className="w-full h-full object-cover"
                />
                <p className="absolute bottom-18 left-10 opacity-70 text-white w-[55rem] ">
                  {slide.description}
                </p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Banner;
