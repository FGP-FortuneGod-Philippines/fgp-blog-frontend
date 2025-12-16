import mission from "@/assets/JMR/missionVision/mission.jpg";
import vision from "@/assets/JMR/missionVision/vision.jpg";
import LazyImage from "@/components/LazyImage";
import { JRMMissionVisionContent } from "@/constants/contents";

const MissionVision = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center gap-5 my-10 max-md:my-0">

      <div className="max-w-[70.5rem] w-full h-auto flex flex-row max-md:flex-col justify-start items-start gap-5">
        <div className="w-full h-auto flex flex-col gap-3 items-start">
          <h3>Our Vision</h3>
          <p className="text-justify">{JRMMissionVisionContent.vission}</p>
        </div>

        <div className="w-full h-[20.25rem] max-md:h-[15.25rem]">
          <LazyImage
            src={vision}
            alt="vision img"
            effect="blur"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      
      <div className="max-w-[70.5rem] w-full h-auto flex flex-row max-md:flex-col-reverse justify-center items-center gap-5">
        <div className="w-full h-[20.25rem] max-md:h-[15.25rem]">
          <LazyImage
            src={mission}
            alt="mission img"
            effect="blur"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        
        <div className="w-full h-auto flex flex-col gap-3 items-start justify-start">
          <h3>Our Mission</h3>
          <p className="text-justify">{JRMMissionVisionContent.mission}</p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;