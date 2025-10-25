import Banner from "@/components/Banner";

const Hero = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center">
      {/* Title */}
      <div className="w-full h-auto flex flex-col items-center mt-15 mb-20 max-md:mb-10 text-center">
        <h1>FGP FortuneGod Philippines</h1>
        <h2>FortuneGod Group of Companies</h2>
        <span className="blockquote">
          “Connecting Markets, Empowering Communities, Creating Prosperity.”
        </span>
      </div>

      {/* Banner */}
      <Banner />
    </div>
  );
};

export default Hero;
