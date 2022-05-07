import { createContext, FC } from "react";

interface BreadCrumbProviderProps {
  step?: any
}
interface BreadCrumbStepsContextState {
  keyActive: string | number | undefined
}
export const BreadCrumbStepsContext = createContext<BreadCrumbStepsContextState>({
  keyActive: undefined,
});

export const BreadCrumbStepsProvider: FC<BreadCrumbProviderProps> = (props) => {
  const { step } = props;
  return (
    <BreadCrumbStepsContext.Provider value={{
      keyActive: step
    }}>
      {props.children}
    </BreadCrumbStepsContext.Provider>
  )
};