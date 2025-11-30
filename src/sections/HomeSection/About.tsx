import aboutIllustration from "@/assets/About me-rafiki.webp";
import LazyImage from "@/components/LazyImage";
import { aboutContent } from "@/constants/contents";

const About = () => {
  return (
    <div
      id="about"
      className="max-w-[70.5rem] w-full h-auto flex justify-center items-center max-md:flex-col gap-5"
    >
      <div className="w-full h-[31.25rem] max-md:h-[20rem]">
        <LazyImage
          src={aboutIllustration}
          alt="about illustration"
          effect="blur"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="w-full h-auto flex flex-col gap-3">
        <h3>About Us</h3>
        <p className="text-justify">{aboutContent.content}</p>
      </div>
    </div>
  );
};

export default About;
