import BaseSlider from "./BaseSlider";
import { executiveTeam } from "@/constants";

const ExecutiveSlider = () => {
  const customSettings = {
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    arrows: false,
    slidesToShow: 3,
  };

  // Dynamic Slides
  const slides = executiveTeam.map((exec) => (
    <div key={exec.name} className="text-center">
      <img
        src={exec.image}
        alt={exec.name}
        className="w-45 h-45 mx-auto rounded-full object-contain mb-4"
      />
      <h4 className="text-sm">{exec.name}</h4>
      <p className="text-xs">{exec.position}</p>
    </div>
  ));

  return (
    <section className="container mx-auto my-10">
      <BaseSlider slides={slides} settings={customSettings} />
    </section>
  );
};

export default ExecutiveSlider;
