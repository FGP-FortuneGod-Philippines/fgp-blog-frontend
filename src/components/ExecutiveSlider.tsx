import ceo from "@/assets/executives/CEO.png";
import jarl from "@/assets/executives/jarl.png";
import kevin from "@/assets/executives/kevin-1.png";
import stanley from "@/assets/executives/stanley.png";
import BaseSlider from "./BaseSlider";

interface MeetTeamProps {
  name: string;
  position: string;
  image: string;
  email?: string;
  facebook?: string;
  linkedin?: string;
}

const ExecutiveSlider = () => {
  const executiveTeam: MeetTeamProps[] = [
    { name: "David Huang", position: "Chairman / CEO", image: ceo },
    { name: "Jarl Lin", position: "Chief Finance Officer", image: jarl },
    { name: "Stanley Liu", position: "President", image: stanley },
    { name: "Kevin Yang", position: "Global Trade Director", image: kevin },
  ];

  const customSettings = {
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    arrows: false,
    slidesToShow: 3,
  };

  // ✅ Dynamically generate slides
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
    <section className="container mx-auto">
      <BaseSlider slides={slides} settings={customSettings} />
    </section>
  );
};

export default ExecutiveSlider;
