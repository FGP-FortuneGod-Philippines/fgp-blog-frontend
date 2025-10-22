import Slider, { type Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface BaseSliderProps {
  slides: React.ReactNode[];
  settings?: Settings;
  className?: string;
}

const BaseSlider = ({ slides, settings, className }: BaseSliderProps) => {
  const defaultSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    ...settings,
  };

  return (
    <Slider {...defaultSettings}>
      {slides.map((slide, index) => (
        <div key={index} className={`px-2 ${className}`}>
          {slide}
        </div>
      ))}
    </Slider>
  );
};

export default BaseSlider;
