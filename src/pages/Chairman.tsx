import Awards from "@/sections/ChairmanSection/Awards";
import ChairBio from "@/sections/ChairmanSection/ChairBio";
import ChairHero from "@/sections/ChairmanSection/ChairHero";
import Leadership from "@/sections/ChairmanSection/Leadership";
import Qualifications from "@/sections/ChairmanSection/Qualifications";

const Chairman = () => {
  return (
    <div className="wrapper h-auto flex flex-col items-center">
      <ChairHero />

      <ChairBio />

      <Awards />

      <Qualifications />

      <Leadership />
    </div>
  );
};

export default Chairman;
