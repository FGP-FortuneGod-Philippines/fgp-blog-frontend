import { foreignTeam } from "@/constants";
import BaseSlider from "./BaseSlider";

const ForeignSlider = () => {
  const customSettings = {
    autoplay: false,
    arrows: false,
    slidesToShow: 4,
  };

  const slides = foreignTeam.map((team) => (
    <div key={team.name} className="text-center">
      <img
        src={team.image}
        alt={team.name}
        className="w-45 h-45 mx-auto rounded-full object-contain mb-4"
      />
      <h4 className="text-sm">{team.name}</h4>
      <p className="text-xs">{team.position}</p>
    </div>
  ));

  return (
    <section className="container mx-auto my-10">
      <h3 className="mb-10">Foreign Affairs</h3>
      <BaseSlider slides={slides} settings={customSettings} />
    </section>
  );
};

export default ForeignSlider;
