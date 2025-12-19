import Marquee from '@/components/jmr-components/Marquee';
import { marquee1, marquee2 } from "@/constants";

const ClientBase = () => {
  return (
    <div className="flex justify-center px-4 py-8">
      <div className="w-full max-w-[70.5rem] flex flex-col items-center">
        <h3 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold mb-6 md:mb-8">
          Our Client Base
        </h3>
        
        {/* Top row - scrolls from right to left */}
        <div className="w-full mb-8">
          <Marquee 
            clients={marquee1}
            direction="left"
            speed={60}
            pauseOnHover={true}
          />
        </div>
        
        {/* Bottom row - scrolls from left to right */}
        <div className="w-full">
          <Marquee 
            clients={marquee2}
            direction="right"
            speed={30}
            pauseOnHover={true}
          />
        </div>
      </div>
    </div>
  );
};

export default ClientBase;