import React, { FC, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Accordion } from "../../../types/components/Accordion";
import AccordionProvider, { AccordionContext } from "./AbstractAccordion";
import AccordionElement from "./AccordionElement";

const ProviderAccordion: FC<Accordion> = (props) => {
  return (
    <AccordionProvider>
      <Accordion {...props}>{props.children}</Accordion>
    </AccordionProvider>
  );
};

const Accordion: FC<Accordion> = (props) => {
  const { onChangeAccordion } = useContext(AccordionContext);
  const { children, defaultId } = props;
  useEffect(() => {
    if (defaultId !== undefined) {
      onChangeAccordion(defaultId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultId]);
  return <>{children}</>;
};

Accordion.defaultProps = {
  defaultId: undefined,
};

Accordion.propTypes = {
  defaultId: PropTypes.any,
};

export default Object.assign(ProviderAccordion, {
  Element: AccordionElement,
});
