import { createContext, FC, useCallback, useState } from "react";

interface TabContextState {
  activeKey?: string | number | null;
  onChangeKey: (key: string | number) => void;
  onSetPosition: (value: DOMRect) => void;
  positionTab?: DOMRect | null
}

interface TabContextProvider {
  onSelect?: (key: string | number) => void;
  defaultActiveKey?: string | number,
}

export const TabContext = createContext<TabContextState>({
  activeKey: null,
  onChangeKey: (key) => {},
  onSetPosition: (value: DOMRect) => {},
  positionTab: null
});

export const TabContextProvider: FC<TabContextProvider> = (props) => {
  const { children, defaultActiveKey, onSelect } = props;
  const [positionTab, setPositionTab] = useState<null | DOMRect>(null)
  const [idActive, setIdActive] = useState(defaultActiveKey || null);
  const onChangeKey = (key: string | number) => {
    if (onSelect) {
      onSelect(key);
    }
    setIdActive(key);
  };
  const onSetPosition = useCallback((value: DOMRect) => {
    setPositionTab(value);
  }, []);
  return (
    <TabContext.Provider
      value={{
        activeKey: idActive,
        onChangeKey: onChangeKey,
        onSetPosition: onSetPosition,
        positionTab: positionTab
      }}
    >
      {children}
    </TabContext.Provider>
  );
};
