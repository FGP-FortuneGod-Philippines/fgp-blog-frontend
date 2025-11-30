import { phBusinessAssociates } from "@/constants";
import BaseSlider from "../base-components/BaseSlider";
import TeamLayout from "./TeamLayout";

const PhBusinessAssociate = () => {
  const slides = phBusinessAssociates.map((data) => (
    <TeamLayout key={data.name} data={data} />
  ));

  return (
    <section className="container mx-auto">
      <h3 className="mb-10">Philippine Business Associates</h3>
      <BaseSlider slides={slides} />
    </section>
  );
};

export default PhBusinessAssociate;
