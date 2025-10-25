import { Button } from "@/components/ui/button";
import { cards } from "@/constants";
import { LuArrowRight } from "react-icons/lu";

const Offers = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-10 my-10">
      <h3>What We Do and Offer</h3>

      <div className="grid grid-cols-1 md:grid-cols-4 xs:grid-cols-2 gap-3">
        {cards.map((card) => (
          <div
            key={card.alt}
            className="w-full h-auto flex flex-col items-center gap-5"
          >
            <div className="max-w-[15rem] w-full h-[15rem]">
              <img
                src={card.src}
                alt={card.alt}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col justify-start items-start">
              <p className="font-semibold tracking-wide max-lg:text-sm">
                {card.label}
              </p>
              <Button className="w-fit">
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
