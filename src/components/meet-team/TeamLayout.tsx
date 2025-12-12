/* eslint-disable @typescript-eslint/no-explicit-any */
import LazyImage from "../LazyImage";
import { Card, CardContent } from "../ui/card";
import { CarouselItem } from "../ui/carousel";

interface TeamProps {
  data: any;
  className?: string;
}

const TeamLayout = ({ data, className }: TeamProps) => {
  return (
    <CarouselItem key={data.name} className={`basis-full ${className}`}>
      <Card className="border-none shadow-none">
        <CardContent className="text-center">
          <LazyImage
            src={data.image}
            alt={data.name}
            className="
              max-sm:w-30 max-sm:h-30 
              w-40 h-40 
              mx-auto 
              rounded-full 
              object-contain 
              mb-4

              border-[5px] 
              border-[oklch(0.8062_0.1305_80.5909)]

              shadow-[0_4px_12px_oklch(0.8062_0.1305_80.5909/.35)]

              transition-shadow 
              duration-300 
              ease-in-out
              
              hover:shadow-[0_8px_24px_oklch(0.8062_0.1305_80.5909/.5)]
            "
          />
          <h4 className="text-sm">{data.name}</h4>
          <p className="text-xs">{data.position}</p>
        </CardContent>
      </Card>
    </CarouselItem>
  );
};

export default TeamLayout;