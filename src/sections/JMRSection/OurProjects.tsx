import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { projectSamples } from "@/constants";

const tabTriggerClass = `
  h-full
  px-4
  md:px-6
  flex
  items-center
  justify-center
  text-sm
  md:text-base
  font-medium
  text-muted-foreground
  rounded-none
  border-none
  focus-visible:ring-0
  focus-visible:ring-offset-0
  hover:text-foreground
  data-[state=active]:bg-[#D8A34A]
  data-[state=active]:text-white
  w-full
  py-3
  md:py-0
`;

const OurProjects = () => {
  return (
    <section className="px-4 py-12">
      <div className="max-w-[70.5rem] mx-auto space-y-8">
        <h3 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold mb-6 md:mb-8">
          Our Projects
        </h3>

        <Tabs defaultValue="vena" className="w-full">
          {/* Tabs Header - Original style, responsive */}
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
            <TabsTrigger value="vena" className={tabTriggerClass}>
              Vena Energy
            </TabsTrigger>
            <TabsTrigger value="nsec" className={tabTriggerClass}>
              NSEC Nuevo Solar Energy Corp
            </TabsTrigger>
            <TabsTrigger value="taiheiyo" className={tabTriggerClass}>
              Taiheiyo Cement
            </TabsTrigger>
            <TabsTrigger value="prime" className={tabTriggerClass}>
              Prime Infra
            </TabsTrigger>
          </TabsList>

          {/* Tab Contents */}
            {projectSamples.map((group) => {
              const tabValue = group.category.split(" ")[0].toLowerCase();

              return (
                <TabsContent
                  key={group.category}
                  value={tabValue}
                  className="pt-8"
                >
                  <h4 className="text-xl md:text-2xl font-semibold mb-6">
                    {group.category} Projects
                  </h4>

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
                        <img
                          src={project.image}
                          alt={project.name}
                          className="
                            w-full
                            h-48
                            sm:h-56
                            md:h-64
                            object-cover
                          "
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              );
            })}
        </Tabs>
      </div>
    </section>
  );
};

export default OurProjects;