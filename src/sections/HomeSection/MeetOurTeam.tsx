import ExecutiveSlider from "@/components/meet-team/ExecutiveSlider";
import ForeignSlider from "@/components/meet-team/ForeignSlider";
import OperationsTeam from "@/components/meet-team/OperationsTeam";
import PhBusinessAssociate from "@/components/meet-team/PhBusinessAssociate";
import TextType from "@/components/animation/TextType";

const MeetOurTeam = () => {
  return (
    <div className="w-full h-auto flex flex-col items-start gap-5 max-md:gap-3 mt-10 space-y-5">
      {/* Title */}
      <div className="w-full h-auto flex flex-col justify-center items-center">
        <h3 className="text-5xl md:text-8xl font-light text-center leading-tight">
          Meet Our{" "}
          <TextType
            text={["Team"]}
            typingSpeed={40}
            pauseDuration={2500}
            deletingSpeed={100}
            initialDelay={100}
            showCursor={true}
            cursorCharacter="|"
            className="text-primary font-serif"
          />
        </h3>
        <p className="max-w-[50rem] w-full text-center my-5">
          Meet the passionate visionaries and dedicated experts behind
          ShoPilipinas, driving innovation, empowering local sellers, and
          shaping the future of Philippine e-commerce.
        </p>
      </div>

      {/* Slider */}
      <ExecutiveSlider />

      <ForeignSlider />

      <PhBusinessAssociate />

      <OperationsTeam />
    </div>
  );
};

export default MeetOurTeam;
