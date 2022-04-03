import React from "react";
import AccordionProvider from "./AbstractAccordion";
import AccordionElement from "./AccordionElement";

const Accordion = () => {
  return (
    <AccordionProvider>
      <AccordionElement/>
    </AccordionProvider>
  )
}

export default Accordion;