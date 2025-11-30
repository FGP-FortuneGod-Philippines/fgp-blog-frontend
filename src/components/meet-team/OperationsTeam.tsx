import { operationsTeam } from "@/constants";
import BaseSlider from "../base-components/BaseSlider";
import TeamLayout from "./TeamLayout";
import Autoplay from "embla-carousel-autoplay";

const OperationsTeam = () => {
  const slides = operationsTeam.map((data) => (
    <TeamLayout
      key={data.name}
      data={data}
      className="xl:basis-1/5 lg:basis-1/4 md:basis-1/3 sm:basis-1/2"
    />
  ));

  return (
    <section className="container mx-auto">
      <h3 className="mb-10">Operations Team</h3>
      <BaseSlider
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 2000 })]}
        slides={slides}
      />
    </section>
  );
};

export default OperationsTeam;
