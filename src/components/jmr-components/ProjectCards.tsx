import { lazy } from "react";

const BaseDialog = lazy(
  () => import("@/components/base-components/BaseDialog")
);
import LazyImage from "../LazyImage";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  align?: "left" | "right";
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  description,
  images,
  align = "left",
}) => {
  const isRight = align === "right";

  return (
    <div className={`flex flex-col md:flex-row gap-6 md:gap-10`}>
      {isRight ? (
        <>
          {/* For align="right": Mobile: Content → Button (both right), Desktop: Button ← Content */}
          
          {/* CONTENT - Mobile: first (right), Desktop: right side */}
          <div className="order-1 md:order-2 md:flex-1 flex flex-col justify-between text-right">
            <div>
              <h3 className="text-right text-xl md:text-2xl lg:text-3xl font-semibold mb-2 md:mb-4">
                {title}
              </h3>
              <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                <strong>{subtitle}</strong> {description}
              </p>
            </div>
          </div>

          {/* BUTTON - Mobile: last (right), Desktop: left side */}
          <div className="order-2 md:order-1 md:w-auto md:self-end">
            <div className="flex justify-end md:block">
              <BaseDialog trigger="View Project" close="Close">
                  <div className="px-4 py-6 md:px-6 md:py-8">
                    {/* Dialog Header */}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                        {title}
                      </h3>
                      <div className="w-20 h-1 bg-[#D8A34A] mx-auto rounded-full"></div>
                    </div>

                    <div className="mb-6">           
                      {/* 3-column responsive grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {images.map((img, idx) => (
                          <div
                            key={idx}
                            className="rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                          >
                            <LazyImage
                              src={img}
                              alt={`${title} image ${idx + 1}`}
                              effect="blur"
                              className="w-full h-56 md:h-64 object-contain rounded-xl hover:scale-105 transition-transform duration-500 ease-out bg-gray-100"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
              </BaseDialog>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* For align="left": Mobile: Content → Button (both left), Desktop: Content → Button */}
          
          {/* CONTENT - Mobile: first (left), Desktop: left side */}
          <div className="md:flex-1 flex flex-col justify-between text-left">
            <div>
              <h3 className="text-left text-xl md:text-2xl lg:text-3xl font-semibold mb-2 md:mb-4">
                {title}
              </h3>
              <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                <strong>{subtitle}</strong> {description}
              </p>
            </div>
          </div>

          {/* BUTTON - Mobile: last (left), Desktop: right side */}
          <div className="md:w-auto md:self-end">
            <BaseDialog trigger="View Project" close="Close">
                <div className="px-4 py-6 md:px-6 md:py-8">
                  {/* Dialog Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                      {title}
                    </h3>
                    <div className="w-20 h-1 bg-[#D8A34A] mx-auto rounded-full"></div>
                  </div>

                  <div className="mb-6">
                    {/* 3-column responsive grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                      {images.map((img, idx) => (
                        <div
                          key={idx}
                          className="rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                          <img
                            src={img}
                            alt={`${title} image ${idx + 1}`}
                            className="w-full h-56 md:h-64 object-contain rounded-xl hover:scale-105 transition-transform duration-500 ease-out bg-gray-100"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
            </BaseDialog>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectCard;