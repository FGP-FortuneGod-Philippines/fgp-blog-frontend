import type { ImageProps } from "@/interfaces";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyImage = ({
  src,
  alt,
  className,
  wrapperClassName,
  effect = "opacity",
  onError,
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
      onError={onError}
      referrerPolicy="no-referrer"
    />
  );
};

export default LazyImage;
