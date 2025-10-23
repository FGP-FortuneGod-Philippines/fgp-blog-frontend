import { operationsTeam } from "@/constants";
import BaseSlider from "./BaseSlider";

const OperationsTeam = () => {
  const customSettings = {
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    arrows: false,
    slidesToShow: 5,
  };

  const slides = operationsTeam.map((team) => (
    <div key={team.name} className="text-center max-w-[80%] w-full">
      <img
        src={team.image}
        alt={team.name}
        className="w-35 h-35 mx-auto rounded-full object-contain mb-4"
      />
      <h4 className="text-sm">{team.name}</h4>
      <p className="text-xs leading-normal">{team.position}</p>
    </div>
  ));

  return (
    <section className="container mx-auto my-10">
      <BaseSlider slides={slides} settings={customSettings} />
    </section>
  );
};

export default OperationsTeam;
