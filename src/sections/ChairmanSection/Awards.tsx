import BaseCards from "@/components/base-components/BaseCards";
import awardIcon from "@/assets/awardsFGP-1.png";
import { awardsCard } from "@/constants";

const Awards = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center">
      <h3>Awards and Recognition</h3>

      <section className="w-full h-auto grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-y-20 max-md:gap-20 gap-x-10 max-md:gap-x-5 my-15">
        {awardsCard.map((award) => (
          <BaseCards
            key={award.label}
            className="flex flex-col items-center gap-2 p-10 hover:bg-[#E9D291] transition-colors duration-300"
          >
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-30 h-30">
              <img
                src={awardIcon}
                alt="award icon"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-3 items-center">
              <p className="text-center text-sm italic">{award.description}</p>
              <h4 className="text-center text-sm">{award.label}</h4>
            </div>
          </BaseCards>
        ))}
      </section>
    </div>
  );
};

export default Awards;
