import React, { createContext, FC, useCallback, useState } from "react";

interface AccordionContextProps {
  idActive: number | null;
  onChangeAccordion: (id: number) => void
}

export const AccordionContext = createContext<AccordionContextProps>({
  idActive: 0,
  onChangeAccordion: (id: number) => {}
})

const AccordionProvider: FC = (props) => {
  const [idActive, setIdActive] = useState<number | null>(null);

  const onHandleAccordion = useCallback((id: number) => {
    if (id === idActive) {
      return setIdActive(null);
    }
    setIdActive(id);
  }, [idActive]);
  return (
    <AccordionContext.Provider value={{
      idActive: idActive,
      onChangeAccordion: onHandleAccordion
    }}>
      {props.children}
    </AccordionContext.Provider>
  )
}

export default AccordionProvider;