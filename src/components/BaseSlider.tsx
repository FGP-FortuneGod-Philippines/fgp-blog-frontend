import Slider, { type Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface BaseSliderProps {
  slides: React.ReactNode[];
  settings?: Settings;
}

const BaseSlider = ({ slides, settings }: BaseSliderProps) => {
  const defaultSettings: Settings = {
    slidesToScroll: 1,
    ...settings,
  };

  return <Slider {...defaultSettings}>{slides}</Slider>;
};

export default BaseSlider;
