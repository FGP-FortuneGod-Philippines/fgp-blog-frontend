/* eslint-disable @typescript-eslint/no-explicit-any */
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
          <img
            src={data.image}
            alt={data.name}
            className="w-45 h-45 mx-auto rounded-full object-contain mb-4"
          />
          <h4 className="text-sm">{data.name}</h4>
          <p className="text-xs">{data.position}</p>
        </CardContent>
      </Card>
    </CarouselItem>
  );
};

export default TeamLayout;
