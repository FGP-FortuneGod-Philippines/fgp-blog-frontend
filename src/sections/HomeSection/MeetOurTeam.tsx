import ExecutiveSlider from "@/components/meet-team/ExecutiveSlider";
import ForeignSlider from "@/components/meet-team/ForeignSlider";
import OperationsTeam from "@/components/meet-team/OperationsTeam";
import PhBusinessAssociate from "@/components/meet-team/PhBusinessAssociate";
import { useEffect, useState } from "react";

const MeetOurTeam = () => {
  return (
    <div className="w-full h-auto flex flex-col items-start gap-5 max-md:gap-3 mt-10">
      {/* Title */}
      <div className="w-full h-auto flex flex-col justify-center items-center">
        <h3>Meet Our Team</h3>
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
