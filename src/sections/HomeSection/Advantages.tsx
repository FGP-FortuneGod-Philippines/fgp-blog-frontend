import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { keyAdvantage, whyFgp } from "@/constants";

const Advantages = () => {
  return (
    <div className="wrapper flex flex-col items-center gap-5 my-10 max-md:my-5">
      <div className="flex flex-col gap-5 max-md:gap-2 items-center my-10 max-md:my-0">
        <h3>Our Platforms & Advantages</h3>
        <div className="max-w-[10rem] w-full border-b border-[var(--gray-border)]" />
        <p className="text-center">
          Learn about our core platforms and the unique business value we bring
          to customers and partners.
        </p>
      </div>

      {/* Accordion */}
      <div className="max-w-[70.5rem] w-full h-auto flex max-md:flex-col justify-center items-stretch gap-5 my-10 max-md:my-5">
        {/* Left Accord */}
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <h3>Why FortuneGod?</h3>

          <Accordion
            type="single"
            collapsible
            className="flex-1 w-full"
            defaultValue="item-1"
          >
            {whyFgp &&
              whyFgp.map((item) => (
                <AccordionItem
                  key={item.title}
                  value={`item-${item.item}`}
                  className="border-none "
                >
                  <AccordionTrigger className="font-semibold text-base max-md:text-sm">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>{item.description}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
          </Accordion>
        </div>

        {/* Left Accord */}
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <h3>Key Market Advantages</h3>

          <Accordion
            type="single"
            collapsible
            className="flex-1 w-full"
            defaultValue="item-1"
          >
            {keyAdvantage &&
              keyAdvantage.map((item) => (
                <AccordionItem
                  key={item.title}
                  value={`item-${item.item}`}
                  className="border-none "
                >
                  <AccordionTrigger className="font-semibold text-base max-md:text-sm">
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
    </div>
  );
};

export default Advantages;
