import React, { createContext, FC, useState } from "react";

interface AccordionContextProps {
  isActive: boolean;
  onHide: () => void
}

export const AccordionContext = createContext<AccordionContextProps>({
  isActive: false,
  onHide: () => {}
})

const AccordionProvider: FC = (props) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <AccordionContext.Provider value={{
      isActive: isActive,
      onHide: () => null
    }}>
      {props.children}
    </AccordionContext.Provider>
  )
}

export default AccordionProvider;