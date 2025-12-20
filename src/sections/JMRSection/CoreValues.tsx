import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { jmrCoreValues } from "@/constants";

const CoreValues = () => {
  return (
    <div className="flex justify-center px-4 py-8">
      <div className="w-full max-w-[70.5rem] flex flex-col items-center">
        <h3 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold mb-6 md:mb-8">
          Core Values
        </h3>

        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          {jmrCoreValues.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${item.item}`}
              className="border-none"
            >
              <AccordionTrigger className="font-semibold text-base sm:text-xl">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base lg:text-lg leading-relaxed">
                <p>{item.description}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default CoreValues;
