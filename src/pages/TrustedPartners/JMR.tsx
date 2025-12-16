import JMRHero from "@/sections/JMRSection/JMRHero"
import WhyChooseUs from "@/sections/JMRSection/WhyChooseUs"
import DedicatedProfessionals from "@/sections/JMRSection/DedicatedProfessionals"
import ClientBase from "@/sections/JMRSection/ClientBase"
import MissionVision from "@/sections/JMRSection/MissionVision"
import CoreValues from "@/sections/JMRSection/CoreValues"
import Commitment from "@/sections/JMRSection/Commitment"

const JMR = () => {
  return (
    <div className="w-full">
      <JMRHero/>
      <WhyChooseUs/>
      <DedicatedProfessionals/>
      <ClientBase/>
      <MissionVision/>
      <CoreValues/>
      <Commitment/>
    </div>
  )
}

export default JMR
