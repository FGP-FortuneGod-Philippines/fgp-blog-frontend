import ExecutiveSlider from "@/components/ExecutiveSlider";

const MeetOurTeam = () => {
  return (
    <div className="w-full h-auto flex flex-col items-start gap-5 my-10">
      {/* Title */}
      <div className="w-full h-auto flex flex-col items-center">
        <h3 className="text-center text-5xl">Meet Our Team</h3>
        <p className="max-w-[50rem] w-full text-center my-10">
          Meet the passionate visionaries and dedicated experts behind
          ShoPilipinas, driving innovation, empowering local sellers, and
          shaping the future of Philippine e-commerce.
        </p>
      </div>

      {/* Slider */}
      <ExecutiveSlider />
    </div>
  );
};

export default MeetOurTeam;
