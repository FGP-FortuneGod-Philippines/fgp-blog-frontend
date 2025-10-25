import ExecutiveSlider from "@/components/meet-team/ExecutiveSlider";
import ForeignSlider from "@/components/meet-team/ForeignSlider";
import OperationsTeam from "@/components/meet-team/OperationsTeam";
import PhBusinessAssociate from "@/components/meet-team/PhBusinessAssociate";

const MeetOurTeam = () => {
  return (
    <div className="w-full h-auto flex flex-col items-start gap-5 mt-10">
      {/* Title */}
      <div className="h-auto flex flex-col items-center">
        <h3 className="text-center text-5xl">Meet Our Team</h3>
        <p className="text-center my-10">
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
