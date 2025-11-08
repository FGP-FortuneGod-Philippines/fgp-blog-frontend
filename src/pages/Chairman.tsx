import Awards from "@/sections/ChairmanSection/Awards";
import ChairBio from "@/sections/ChairmanSection/ChairBio";
import ChairHero from "@/sections/ChairmanSection/ChairHero";
import Qualifications from "@/sections/ChairmanSection/Qualifications";

const Chairman = () => {
  return (
    <div className="wrapper h-auto flex flex-col items-center">
      <ChairHero />

      <ChairBio />

      <Awards />

      <Qualifications />
    </div>
  );
};

export default Chairman;
