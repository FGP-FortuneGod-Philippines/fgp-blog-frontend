import divider from "@/assets/coin-divider.png";

const Divider = () => {
  return (
    <div className="w-full h-[8rem] flex justify-center items-center my-10 max-sm:my-0">
      <img
        src={divider}
        alt="coin-divider"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Divider;
