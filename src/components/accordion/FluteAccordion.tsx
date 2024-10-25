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
          } rounded-2xl p-12`}
        >
          <AccordionItem value={`item-${index}`}>
            <AccordionTrigger
              className="text-2xl flex justify-between items-center"
              onClick={() => handleToggle(index)}
            >
              <div className="text-[40px] text-[#191A23] font-[500]">
                <span className="mr-4">0{list.number}</span> {list.title}
              </div>
              <span className="text-[40px] text-[#191A23] font-bold border border-black rounded-full w-10 h-10 flex items-center justify-center">
                {openItems[index] ? "-" : "+"}
              </span>
            </AccordionTrigger>

            {openItems[index] && (
              <AccordionContent className="mt-[20px] text-[34px] leading-[45px] font-[500] text-[#000]">
                <div className="w-[95%] rounded pr-20 h-[1px] my-3 bg-[#000]"></div>
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
