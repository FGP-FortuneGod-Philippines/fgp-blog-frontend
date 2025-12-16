import JMRHero from "@/sections/JMRSection/JMRHero"
import WhyChooseUs from "@/sections/JMRSection/WhyChooseUs"
import DedicatedProfessionals from "@/sections/JMRSection/DedicatedProfessionals"
import ClientBase from "@/sections/JMRSection/ClientBase"
import MissionVision from "@/sections/JMRSection/MissionVision"

const JMR = () => {
  return (
    <div className="w-full">
      <JMRHero/>
      <WhyChooseUs/>
      <DedicatedProfessionals/>
      <ClientBase/>
      <MissionVision/>
    </div>
  )
}

export default JMR
