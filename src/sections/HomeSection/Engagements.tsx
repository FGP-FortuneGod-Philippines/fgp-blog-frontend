import BaseCards from "@/components/BaseCards";
import { engagementStats } from "@/constants";

const Engagements = () => {
  return (
    <div className="w-full h-auto grid grid-cols-2 lg:grid-cols-4 gap-5 my-10">
      {engagementStats &&
        engagementStats.map((count) => (
          <BaseCards key={count.label} className="w-full flex flex-col gap-5">
            <p className="tracking-wide font-semibold text-center max-md:text-sm">
              {count.label}
            </p>
            <p className="tracking-wide font-semibold text-center max-md:text-sm">
              {count.count}
            </p>
          </BaseCards>
        ))}
    </div>
  );
};

export default Engagements;
