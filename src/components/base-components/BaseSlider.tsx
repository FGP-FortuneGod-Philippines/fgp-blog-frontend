/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

interface BaseSliderProps {
  slides: React.ReactNode[];
  opts?: Record<string, any>;
  plugins?: any[];
  arrows?: boolean;
}

const BaseSlider = ({ slides, opts, plugins, arrows }: BaseSliderProps) => {
  return (
    <Carousel
      opts={{
        align: "start",
        ...opts,
      }}
      plugins={plugins}
      className="w-full"
    >
      <CarouselContent>{slides}</CarouselContent>
      {arrows && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
    </Carousel>
  );
};

export default BaseSlider;
