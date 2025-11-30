import mission from "@/assets/missionVision/mission.webp";
import vision from "@/assets/missionVision/vision.webp";
import LazyImage from "@/components/LazyImage";
import { missionVissionContent } from "@/constants/contents";

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
          <p className="text-justify">{missionVissionContent.mission}</p>
        </div>
      </div>

      {/* Vision */}
      <div className="max-w-[70.5rem] w-full h-auto flex max-md:flex-col-reverse justify-center items-center gap-5">
        <div className="w-full h-auto flex flex-col gap-3">
          <h3>Vision</h3>
          <p className="text-justify">{missionVissionContent.vission}</p>
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
