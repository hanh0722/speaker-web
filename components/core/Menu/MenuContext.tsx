import { createContext, FC } from "react";

interface MenuContextProps {
  onHide: () => void;
}
interface MenuContextProviderProps {
  onHide: () => void;
}
export const MenuContext = createContext<MenuContextProps>({
  onHide: () => {},
});

export const MenuContextProvider: FC<MenuContextProviderProps> = (props) => {
  const { onHide, children } = props;
  return (
    <MenuContext.Provider
      value={{
        onHide: onHide,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
