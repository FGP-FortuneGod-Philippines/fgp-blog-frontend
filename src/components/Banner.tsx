import placeholder from "@/assets/manilaa.png";

const Banner = () => {
  return (
    <div className="aspect-video flex justify-center items-center border">
      <img
        src={placeholder}
        alt="placeholder"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Banner;
