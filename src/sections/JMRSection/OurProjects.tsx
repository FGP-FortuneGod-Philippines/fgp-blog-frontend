import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { projectSamples } from "@/constants";
import ProjectCard from "@/components/jmr-components/ProjectCards";
import { jmrProjects } from "@/constants";
import LazyImage from "@/components/LazyImage";

/**
 * OurProjects Component
 * 
 * This component displays a section of projects categorized into tabs
 * and showcases individual project cards with images and descriptions.
 * 
 * Features:
 * - Tab navigation for project categories.
 * - Dynamic project rendering per category.
 * - Responsive grid layout for project images.
 * - Lazy loading of project images for better performance.
 * - Separate section displaying detailed project cards.
 * 
 * Component Structure:
 * 1. Tabs Header - Displays categories as tabs.
 * 2. Tabs Content - Displays projects corresponding to the selected tab.
 * 3. Project Cards - Shows detailed project cards below the tabs.
 */
const OurProjects = () => {
  return (
    <section className="px-4 py-12">
      <div className="max-w-[70.5rem] mx-auto space-y-8">
        
        {/* Section Heading */}
        <h3 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold mb-6 md:mb-8">
          Our Projects
        </h3>

        {/* Tabs Component */}
        <Tabs 
          defaultValue={projectSamples[0].category.split(" ")[0].toLowerCase()} 
          className="w-full"
        >
          {/* Tabs Header - Loops through projectSamples to create tab triggers */}
          <TabsList
            className="
              w-full
              h-auto
              md:h-14
              bg-muted
              p-0
              rounded-none
              flex
              flex-col
              md:flex-row
              md:divide-x
            "
          >
            {projectSamples.map((group) => {
              const tabValue = group.category.split(" ")[0].toLowerCase();
              
              return (
                <TabsTrigger 
                  key={tabValue}
                  value={tabValue} 
                  className="tab-trigger-custom"
                >
                  {group.category}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Tabs Content - Loops through projectSamples to render projects for each tab */}
          {projectSamples.map((group) => {
            const tabValue = group.category.split(" ")[0].toLowerCase();

            return (
              <TabsContent
                key={tabValue}
                value={tabValue}
                className="pt-8"
              >
                {/* Subheading for tab content */}
                <h4 className="text-xl md:text-2xl font-semibold mb-6">
                  {group.category} Projects
                </h4>

                {/* Grid of project images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.projects.map((project) => (
                    <div
                      key={project.name}
                      className="
                          overflow-hidden
                          rounded-lg
                          border
                          border-gray-200
                          bg-background
                          shadow-lg
                          hover:-translate-y-1
                          transition-all
                          duration-300
                        "
                    >
                      {/* Lazy loading project image */}
                      <LazyImage
                        src={project.image}
                        alt={project.name}
                        className="
                            w-full
                            h-48
                            sm:h-56
                            md:h-64
                            object-cover
                          "
                        effect="blur"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
        
        {/* Detailed Project Cards Section */}
        <div className="mt-10 md:mt-40 px-4 space-y-35">
          {jmrProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              images={project.images}
              align={project.align as "left" | "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
