import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
}

const LazyImage = ({ src, alt, className, wrapperClassName }: ImageProps) => {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      className={`${className}`}
      effect="blur"
      wrapperClassName={`w-full h-full block overflow-hidden ${
        wrapperClassName || ""
      }`}
    />
  );
};

export default LazyImage;
