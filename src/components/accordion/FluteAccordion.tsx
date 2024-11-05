import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useAccordion from "@/services/flute-theApp/flute-theApp.service";

interface AccordionItemData {
  number: number;
  title: string;
  descriptions: string;
}

const FluteAccordion: React.FC = () => {
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});
  const accordionStore = useAccordion();

  useEffect(() => {
    accordionStore.get.list();
  }, []);

  const handleToggle = (index: number) => {
    setOpenItems((prevOpenItems) => ({
      ...prevOpenItems,
      [index]: !prevOpenItems[index],
    }));
  };

  const data: AccordionItemData[] = accordionStore.Accordion.list;

  return (
    <>
      {data.map((list, index) => (
        <Accordion
          key={index}
          type="single"
          collapsible
          className={`w-full mb-4 ${
            openItems[index]
              ? "bg-gradient-to-b from-[#EBF4F5] to-[#B5C6E0] text-white"
              : "bg-white text-black"
          } rounded-2xl sm:p-12 p-3`}
        >
          <AccordionItem value={`item-${index}`}>
            <AccordionTrigger
              className="text-2xl flex items-center sm:justify-between justify-start w-full"
              onClick={() => handleToggle(index)}
            >
              <div className="flex items-center justify-start text-[20px] leading-[25px] sm:text-[40px] text-[#191A23] font-[500]">
                <span className="mr-1 sm:mr-4">0{list.number}</span>
                <span>{list.title}</span>
              </div>
              <span className="sm:text-[40px] text-[#191A23] font-bold border border-black rounded-full w-5 h-5 sm:w-10 sm:h-10 flex items-center justify-center ml-auto">
                {openItems[index] ? "-" : "+"}
              </span>
            </AccordionTrigger>

            {openItems[index] && (
              <AccordionContent className="my-2 sm:mt-[20px] text-[19px] sm:text-[34px] leading-[30px] sm:leading-[45px] font-[500] text-[#000]">
                <div className="w-[95%] rounded pr-20 h-[1px] sm:my-3 bg-[#000]"></div>
                {list.descriptions}
              </AccordionContent>
            )}
          </AccordionItem>
        </Accordion>
      ))}
    </>
  );
};

export default FluteAccordion;
