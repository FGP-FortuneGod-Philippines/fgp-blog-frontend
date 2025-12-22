import { JMRCommitment } from "@/constants/contents";

/**
 * DedicatedProfessionals component
 * 
 * This component renders the "Dedicated Professionals" section of the website.
 * It displays a heading and a series of paragraphs describing the company's commitments.
 * 
 * Key Features:
 * - Responsive spacing and typography using Tailwind CSS.
 * - Pulls content dynamically from the JMRCommitment constant.
 * - Text is justified on mobile and left-aligned on medium+ screens.
 */

const DedicatedProfessionals = () => {
  return (
    <div className="space-y-4 md:space-y-5 px-4 py-8">
      <h3 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold mb-6 md:mb-8">
        {JMRCommitment.heading}
      </h3>
      <div className="space-y-4 md:space-y-5 max-w-[70.5rem] mx-auto">
        <p className="text-justify md:text-left text-sm md:text-base lg:text-lg leading-relaxed">
          {JMRCommitment.paragraph1}
        </p>
        <p className="text-justify md:text-left text-sm md:text-base lg:text-lg leading-relaxed">
          {JMRCommitment.paragraph2}
        </p>
        <p className="text-justify md:text-left text-sm md:text-base lg:text-lg leading-relaxed">
          {JMRCommitment.paragraph3}
        </p>
      </div>
    </div>
  );
};

export default DedicatedProfessionals;
