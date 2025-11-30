import { businessModelContent } from "@/constants/contents";

const BusinessModel = () => {
  return (
    <div className="w-full h-auto flex max-md:flex-col items-start gap-5 my-10 max-md:my-5">
      <div className="w-full h-full flex justify-center">
        <h3>Business Model Overview</h3>
      </div>

      <div className="w-full h-full flex flex-col justify-start gap-3">
        <p>{businessModelContent.contentHeader}</p>

        <ul className="ml-6 list-disc [&>li]:mt-2">
          {businessModelContent.contentList.map((item, index) => (
            <li key={index}>
              <p>{item}</p>
            </li>
          ))}
        </ul>

        <p>{businessModelContent.contentFooter}</p>
      </div>
    </div>
  );
};

export default BusinessModel;
