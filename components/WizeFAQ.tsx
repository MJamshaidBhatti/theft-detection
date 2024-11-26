import React, { useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import "primereact/resources/themes/saga-blue/theme.css"; // Theme
import "primereact/resources/primereact.min.css"; // Core CSS
import "primeicons/primeicons.css"; // Icons
import "primeflex/primeflex.css"; // PrimeFlex

import { AccordionTabChangeEvent } from "primereact/accordion";

const WizeFAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const headerTemplate = (title: string, index: number) => {
    const isActive = activeIndex === index;
    return (
      <div className="flex justify-content-between align-items-center w-full">
        <span>{title}</span>
        <i
          className={`pi pi-chevron-up text-white transition-transform duration-300 app-primary border-circle p-3 ${
            isActive ? "rotate-180" : ""
          }`}
        ></i>
      </div>
    );
  };

  const onTabChange = (e: AccordionTabChangeEvent) => {
    if (typeof e.index === "number") {
      setActiveIndex(e.index);
    } else {
      setActiveIndex(null); // Handle unexpected values.
    }
  };

  return (
    <div className="flex justify-content-center py-4 px-4 lg:px-8 my-2 md:my-4">
      <div className="w-full ">
        <h2 className="text-5xl font-bold mb-7 text-center">
          Frequently Asked Questions
        </h2>
        <Accordion activeIndex={activeIndex} onTabChange={onTabChange}>
          <AccordionTab
            className={`${
              activeIndex === 0 ? "border-bottom-none" : "border-bottom-active"
            }`}
            headerTemplate={headerTemplate(
              "What is theft detection software?",
              0
            )}
          >
            <div className="border-top-1">
              <p className="py-3">
                Theft detection software identifies and prevents theft in
                retail environments using AI, machine learning, and IoT sensors.
              </p>
            </div>
          </AccordionTab>
          <AccordionTab
            className={`${
              activeIndex === 1 ? "border-bottom-none" : "border-bottom-active"
            }`}
            headerTemplate={headerTemplate(
              "How does theft detection software work?",
              1
            )}
          >
            <div className="border-top-1">
              <p className="py-3">
                Theft detection software analyzes video and sensor data in
                real-time to detect suspicious activities and notify store
                personnel.
              </p>
            </div>
          </AccordionTab>
          <AccordionTab
            className={`${
              activeIndex === 2 ? "border-bottom-none" : "border-bottom-active"
            }`}
            headerTemplate={headerTemplate(
              "Can the software integrate with existing security systems?",
              2
            )}
          >
            <div className="border-top-1">
              <p className="py-3">
                Yes, the software can be integrated with existing CCTV and alarm
                systems to enhance overall security measures.
              </p>
            </div>
          </AccordionTab>
          <AccordionTab
            className={`${
              activeIndex === 3 ? "border-bottom-none" : "border-bottom-active"
            }`}
            headerTemplate={headerTemplate(
              "What types of theft can the software detect?",
              3
            )}
          >
            <div className="border-top-1">
              <p className="py-3">
                The software can detect various types of theft, including
                shoplifting, employee theft, and fraudulent activities at the
                point of sale.
              </p>
            </div>
          </AccordionTab>
        </Accordion>
      </div>
    </div>
  );
};

export default WizeFAQ;
