/* eslint-disable @typescript-eslint/no-explicit-any */
import { Carousel, CarouselContent } from "./ui/carousel";

interface BaseSliderProps {
  slides: React.ReactNode[];
  opts?: Record<string, any>;
  plugins?: any[];
}

const BaseSlider = ({ slides, opts, plugins }: BaseSliderProps) => {
  return (
    <Carousel
      opts={{
        align: "start",
        ...opts,
      }}
      plugins={plugins}
      className="w-full"
    >
      <CarouselContent className="w-full">{slides}</CarouselContent>
    </Carousel>
  );
};

export default BaseSlider;
