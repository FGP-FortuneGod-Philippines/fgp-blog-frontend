import { chairmanMessage } from "@/constants/contents";

const ChairmanMessage = () => {
  return (
    <div className="w-full h-auto text-center flex flex-col my-10">
      <div className="flex flex-col justify-center items-center my-10">
        <div className="flex flex-col mb-10 gap-5">
          <h3>Together for a Brighter Future</h3>

          <h3 className="text-3xl max-md:text-2xl max-sm:text-xl">
            A Message from Our Chairman on Our Vision Ahead
          </h3>
        </div>

        <p className="max-w-[40rem] w-full text-justify whitespace-pre-line ">
          {chairmanMessage.message}
        </p>
      </div>

      <div className="max-w-[60rem] w-full flex flex-col justify-center items-center my-10 mx-auto">
        <h3>{chairmanMessage.chairFooter}</h3>

        <p className="w-full text-center max-md:text-justify">
          {chairmanMessage.chairFooterDescription}
        </p>
      </div>
    </div>
  );
};

export default ChairmanMessage;
