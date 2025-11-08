import BaseSlider from "@/components/BaseSlider";
import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { bioSlide } from "@/constants";
import Autoplay from "embla-carousel-autoplay";
import { RiDoubleQuotesR } from "react-icons/ri";

const ChairBio = () => {
  const slides = bioSlide.map((data) => (
    <CarouselItem
      key={data.label}
      className="basis-full md:basis-1/3 sm:basis-1/2"
    >
      <Card className="border-none shadow-none">
        <CardContent className="text-start max-sm:text-center">
          <RiDoubleQuotesR />
          <h4 className="text-sm mt-3">{data.label}</h4>
          <p className="text-xs leading-4">{data.description}</p>
        </CardContent>
      </Card>
    </CarouselItem>
  ));

  return (
    <div className="w-full flex flex-col gap-5 my-10 max-md:my-5">
      <div className="w-full h-auto flex flex-col gap-5">
        <h3>Biography / Leadership Profile</h3>

        <p className="text-center">
          With an Executive MBA from the University of Liège, Belgium (EU),
          David Huang has built a distinguished career as a visionary leader and
          entrepreneur. Combining academic excellence with extensive experience
          across international trade, e-commerce, and organizational leadership,
          he continues to drive innovation, empower businesses, and contribute
          to sustainable growth in the Philippines and beyond.
        </p>
      </div>

      <div className="w-full h-auto my-10 max-md:my-5">
        <section className="w-full h-auto ">
          <BaseSlider
            opts={{ loop: true }}
            plugins={[Autoplay({ delay: 2000 })]}
            slides={slides}
          />
        </section>
      </div>
    </div>
  );
};

export default ChairBio;
