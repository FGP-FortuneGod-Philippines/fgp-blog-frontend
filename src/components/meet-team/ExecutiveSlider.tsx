import BaseSlider from "../base-components/BaseSlider";
import { executiveTeam } from "@/constants";
import Autoplay from "embla-carousel-autoplay";
import TeamLayout from "./TeamLayout";

const ExecutiveSlider = () => {
  const slides = executiveTeam.map((data, index) => (
    <TeamLayout key={index} data={data} className="md:basis-1/3 sm:basis-1/2" />
  ));

  return (
    <section className="w-full h-auto">
      <BaseSlider
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 2000 })]}
        slides={slides}
      />
    </section>
  );
};

export default ExecutiveSlider;
