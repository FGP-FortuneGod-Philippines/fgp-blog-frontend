import { overviewContent } from "@/constants/contents";

const Overview = () => {
  return (
    <div className="max-w-[70.5rem] w-full h-auto flex justify-center items-center my-10">
      <div className="w-full h-auto flex flex-col gap-5">
        <h3>Company Overview</h3>

        <div className="text-justify flex flex-col gap-5">
          <p>{overviewContent.overviewHeader}</p>
          <p>{overviewContent.overviewBody}</p>
          <p>{overviewContent.overviewFooter}</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
