import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { qualifications } from "@/constants";

const Qualifications = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center">
      <h3>Other Qualifications</h3>

      <Accordion
        type="single"
        collapsible
        className="flex-1 max-w-[50rem] w-full my-10 max-md:my-5"
        defaultValue="item-1"
      >
        {qualifications &&
          qualifications.map((item) => (
            <AccordionItem
              key={item.title}
              value={`item-${item.title}`}
              className="border-none "
            >
              <AccordionTrigger className="font-semibold text-base max-md:text-sm">
                <p className="line-clamp-2">{item.title}</p>
              </AccordionTrigger>
              <AccordionContent>
                <p>{item.description}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
      </Accordion>
    </div>
  );
};

export default Qualifications;
