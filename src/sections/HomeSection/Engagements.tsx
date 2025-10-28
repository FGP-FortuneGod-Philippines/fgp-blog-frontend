import BaseCards from "@/components/BaseCards";
import { engagementStats } from "@/constants";

const Engagements = () => {
  return (
    <div className="w-full h-auto grid grid-cols-2 lg:grid-cols-4 gap-5 my-10 max-sm:my-0">
      {engagementStats &&
        engagementStats.map((count) => (
          <BaseCards key={count.label} className="w-full flex flex-col">
            <p className="text-center font-semibold">{count.label}</p>
            <p className="text-center font-semibold">{count.count}</p>
          </BaseCards>
        ))}
    </div>
  );
};

export default Engagements;
