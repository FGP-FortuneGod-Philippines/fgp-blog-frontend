import BaseCards from "@/components/BaseCards";
import { coreValues } from "@/constants";

const CoreValues = () => {
  return (
    <div className="max-w-[70.5rem] w-full grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5 my-10 max-md:my-0">
      {coreValues &&
        coreValues.map((value) =>
          value.icon && value.description ? (
            <BaseCards
              key={value.title}
              className="flex flex-col justify-start gap-2"
            >
              <value.icon className="text-4xl max-md:text-lg" />
              <h4>{value.title}</h4>
              <p className="text-base max-md:text-sm max-md:leading-5 font-normal">
                {value.description}
              </p>
            </BaseCards>
          ) : (
            <div
              key={value.title}
              className="flex justify-start items-center p-6"
            >
              <h3 className="max-sm:w-full max-sm:text-center">
                {value.title}
              </h3>
            </div>
          )
        )}
    </div>
  );
};

export default CoreValues;
