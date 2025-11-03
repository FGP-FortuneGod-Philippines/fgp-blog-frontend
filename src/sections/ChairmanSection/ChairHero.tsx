import chairman from "@/assets/executives/CEO.webp";

const ChairHero = () => {
  return (
    <div className="w-full flex justify-between max-md:flex-col gap-5 my-10">
      <div className="w-full h-auto flex items-center justify-center">
        <img
          src={chairman}
          alt="chairman profile picture"
          className="w-75 h-75 object-contain"
        />
      </div>

      <div className="w-full h-auto">
        <h3 className="text-start">Chairman Name</h3>

        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
          est magni a vero, deleniti porro sit neque ipsa fuga, nesciunt
          eligendi libero itaque repellendus deserunt. Nobis odit recusandae ad
          esse?
        </p>
      </div>
    </div>
  );
};

export default ChairHero;
