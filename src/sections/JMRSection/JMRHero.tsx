import CoverflowCarousel from "@/components/jmr-components/CoverflowCarousel";
import chairhero from "@/assets/JMR/hero-section/chairhero.png";
import chairhero1 from "@/assets/JMR/hero-section/chairhero-1.png";
import chairhero2 from "@/assets/JMR/hero-section/chairhero-2.png";

const JMRHero: React.FC = () => {
  const images = [
    { src: chairhero, alt: "chairhero" },
    { src: chairhero1, alt: "chairhero1" },
    { src: chairhero2, alt: "chairhero2" }
  ];

  const handleSlideChange = (index: number) => {
    console.log(`Slide changed to index: ${index}`);
    // You can add any additional logic here when slide changes
  };

  return (
    <div className="text-center mt-18 mx-10">
      <h3 className="text-2xl md:text-4xl font-semibold">
        Your Trusted Customs <br /> Brokerage Partner
      </h3>
      <p className="mt-2 text-lg md:text-xl">Fast. Reliable. Efficient</p>

      {/* Desktop Grid - Centered */}
      <div className="hidden md:flex justify-center mt-5">
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-120 w-180">
          <div className="col-span-1 row-span-2 h-full">
            <img
              src={chairhero}
              alt="chairhero"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="col-span-1">
            <img
              src={chairhero1}
              alt="chairhero1"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="col-span-1">
            <img
              src={chairhero2}
              alt="chairhero2"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mobile Coverflow Carousel */}
      <div className="block md:hidden mt-8 relative">
        <CoverflowCarousel 
          startIndex={1}
          onSlideChange={handleSlideChange}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover shadow-xl"
            />
          ))}
        </CoverflowCarousel>
      </div>
    </div>
  );
};

export default JMRHero;