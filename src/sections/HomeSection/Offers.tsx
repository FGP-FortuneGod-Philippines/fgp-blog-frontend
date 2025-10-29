import LazyImage from "@/components/LazyImage";
import { Button } from "@/components/ui/button";
import { cards } from "@/constants";
import { LuArrowRight } from "react-icons/lu";

const Offers = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-10 max-md:gap-5 max-xs:gap-0 my-10">
      <h3>What We Do and Offer</h3>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-3">
        {cards.map((card) => (
          <div
            key={card.alt}
            className="w-full h-auto flex flex-col items-center gap-5"
          >
            <div className="max-w-[15rem] w-full h-[15rem]">
              <LazyImage
                src={card.src}
                alt={card.alt}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col justify-start items-start">
              <p className="font-semibold">{card.label}</p>
              <Button className="w-fit max-sm:text-xs cursor-pointer">
                Learn More
                <LuArrowRight />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
