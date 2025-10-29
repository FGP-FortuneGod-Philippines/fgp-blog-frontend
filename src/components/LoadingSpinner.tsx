/* eslint-disable @typescript-eslint/no-explicit-any */
import { Spinner } from "./ui/spinner";

const LoadingSpinner = (className: any) => {
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <Spinner className={`${className}`} />
    </div>
  );
};

export default LoadingSpinner;
