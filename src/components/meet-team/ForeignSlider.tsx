import { foreignTeam } from "@/constants";
import BaseSlider from "../BaseSlider";
import TeamLayout from "./TeamLayout";

const ForeignSlider = () => {
  const slides = foreignTeam.map((data) => (
    <TeamLayout
      key={data.name}
      data={data}
      className="lg:basis-1/4 md:basis-1/3 sm:basis-1/2"
    />
  ));

  return (
    <section className="container mx-auto">
      <h3 className="mb-10">Foreign Affairs</h3>
      <BaseSlider slides={slides} />
    </section>
  );
};

export default ForeignSlider;
