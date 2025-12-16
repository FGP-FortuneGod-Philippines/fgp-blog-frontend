import Marquee from '@/components/jmr-components/Marquee';
import { marquee1, marquee2 } from "@/constants";

const ClientBase = () => {
  return (
    <div className="w-full py-16 overflow-hidden">
      <h3 className='text-center mb-8'>
        Our Client Base
      </h3>
      
      {/* Top row - scrolls from right to left */}
      <Marquee 
        clients={marquee1}
        direction="left"
        speed={60}
        pauseOnHover={true}
        className="mb-8"
      />
      
      {/* Bottom row - scrolls from left to right */}
      <Marquee 
        clients={marquee2}
        direction="right"
        speed={30}
        pauseOnHover={true}
      />
    </div>
  );
};

export default ClientBase;