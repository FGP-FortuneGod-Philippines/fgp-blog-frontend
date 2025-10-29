// import Banner from "@/components/Banner";
import LoadingSpinner from "@/components/LoadingSpinner";
import { lazy, Suspense } from "react";

const Hero = () => {
  const Banner = lazy(() => import("@/components/Banner"));
  return (
    <div className="w-full h-auto flex flex-col items-center">
      {/* Title */}
      <div className="w-full h-auto flex flex-col items-center mt-5 max-md:mt-15 mb-10 max-md:mb-10 text-center">
        <h1>FGP FortuneGod Philippines</h1>
        <h2>FortuneGod Group of Companies</h2>
        <span className="blockquote mt-2">
          “Connecting Markets, Empowering Communities, Creating Prosperity.”
        </span>
      </div>

      {/* Banner */}
      <div className="max-w-[62.5rem] w-full max-h-[62.5rem] h-auto">
        <Suspense fallback={<LoadingSpinner />}>
          <Banner />
        </Suspense>
      </div>
    </div>
  );
};

export default Hero;
