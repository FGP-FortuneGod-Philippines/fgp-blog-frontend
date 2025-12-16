import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { jmrCoreValues } from "@/constants"

const CoreValues = () => {
  return (
    <div className="flex justify-center px-4">
      <div className="w-full max-w-3xl flex flex-col items-center">
        <h3 className="text-center mb-6">Core Values</h3>

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
              <AccordionContent>
                <p>{item.description}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

export default CoreValues