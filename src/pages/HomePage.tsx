import Divider from "@/components/Divider";
import About from "@/sections/HomeSection/About";
import Advantages from "@/sections/HomeSection/Advantages";
import BusinessModel from "@/sections/HomeSection/BusinessModel";
import ChairmanMessage from "@/sections/HomeSection/ChairmanMessage";
import CoreValues from "@/sections/HomeSection/CoreValues";
import Engagements from "@/sections/HomeSection/Engagements";
import Hero from "@/sections/HomeSection/Hero";
import MeetOurTeam from "@/sections/HomeSection/MeetOurTeam";
import MissionVision from "@/sections/HomeSection/MissionVision";
import Offers from "@/sections/HomeSection/Offers";
import Overview from "@/sections/HomeSection/Overview";

const HomePage = () => {
  return (
    <div className="wrapper h-auto flex flex-col items-center">
      <Hero />

      <Engagements />

      <Offers />

      <About />

      <Overview />

      <MissionVision />

      <Divider />

      <CoreValues />

      <Advantages />

      <BusinessModel />

      <Divider />

      <MeetOurTeam />

      <ChairmanMessage />
    </div>
  );
};

export default HomePage;
