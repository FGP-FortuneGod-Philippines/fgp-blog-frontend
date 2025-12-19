import chairman from "@/assets/chairman.png";
import LazyImage from "@/components/LazyImage";

const ChairHero = () => {
  return (
    <div className="w-full flex justify-between items-start max-md:block gap-25 my-10 max-md:my-5">
      {/* IMAGE — floats on mobile */}
      <div
        className="
        max-md:float-left max-md:mr-4 max-md:mb-4 
        flex items-center justify-center
        w-[400px] h-[400px]       /* desktop */
        max-lg:w-[280px] max-lg:h-[280px]
        max-md:w-[200px] max-md:h-[200px]
        max-xs:w-[160px] max-xs:h-[160px]
        rounded-full overflow-hidden
        flex-shrink-0
        lg:mr-8 xl:mr-12          /* Add space only on desktop */
      "
      >
        <LazyImage
          src={chairman}
          alt="chairman profile picture"
          className="
            w-full h-full
            object-cover
          "
        />
      </div>

      {/* TEXT */}
      <div className="w-full h-auto">
        <h3 className="text-start mb-10 max-md:mb-5 text-2xl md:text-3xl">
          Chairman & Background
        </h3>

        <p className="text-justify text-base md:text-lg max-sm:text-xs leading-relaxed">
          <span className="font-bold">David Huang (黃大維)</span> is a seasoned
          entrepreneur and advisor with nearly three decades of business
          experience in the Philippines, beginning in 1995. His early ventures
          focused on international trade, which later expanded into project
          investment, business consulting, and strategic advisory across
          renewable energy, technology, and infrastructure.
          <br />
          <br />
          He has held prominent public sector roles, including serving as
          Special Advisor to the Director General of the Philippine Economic
          Zone Authority (PEZA-DTI) and Investment and Tourism Promotion Advisor
          to the Provincial Government of Bohol. From 2015 to 2023, Mr. Huang
          was also Vice President of the Taiwan Chamber of Commerce and Industry
          in the Philippines.
        </p>
      </div>
    </div>
  );
};

export default ChairHero;
