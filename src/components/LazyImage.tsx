import { LazyLoadImage, type Effect } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  effect?: Effect; // "blur" | "black-and-white" | "opacity"
}

const LazyImage = ({
  src,
  alt,
  className,
  wrapperClassName,
  effect = "opacity",
}: ImageProps) => {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      className={`${className}`}
      effect={effect}
      wrapperClassName={`w-full h-full block overflow-hidden ${
        wrapperClassName || ""
      }`}
    />
  );
};

export default LazyImage;
