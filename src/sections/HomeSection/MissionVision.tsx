import mission from "@/assets/missionVision/mission.png";
import vision from "@/assets/missionVision/vision.png";
import LazyImage from "@/components/LazyImage";

const MissionVision = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center gap-5 my-10 max-md:my-0">
      {/* Mission */}
      <div className="max-w-[70.5rem] w-full h-auto flex max-md:flex-col justify-center items-center gap-5">
        <div className="w-full h-[20.25rem] max-md:h-[15.25rem]">
          <LazyImage
            src={mission}
            alt="mission img"
            effect="blur"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="w-full h-auto flex flex-col gap-3">
          <h3>Mission</h3>
          <p className="text-justify">
            Integration: Develop a complete supply chain ecosystem from B2C to
            B2B, maximizing value creation. Innovation: Harness AI, live
            commerce, and matrix strategies to redefine shopping experiences.
            Sustainability: Advance green growth with renewable energy,
            waste-to-energy (WTE), and water resource projects Collaboration:
            Act as a strategic bridge connecting Taiwan, the Philippines, and
            global partners
          </p>
        </div>
      </div>

      {/* Vision */}
      <div className="max-w-[70.5rem] w-full h-auto flex max-md:flex-col-reverse justify-center items-center gap-5">
        <div className="w-full h-auto flex flex-col gap-3">
          <h3>Vision</h3>
          <p className="text-justify">
            To be Asia-Pacific’s most trusted innovator in cross-border trade
            and e-commerce, driving prosperity and modernization through
            technology, localization, and sustainability.
          </p>
        </div>

        <div className="w-full h-[20.25rem] max-md:h-[15.25rem]">
          <LazyImage
            src={vision}
            alt="mission img"
            effect="blur"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
