import { createContext, FC } from "react";
import useBreadCrumbSteps from "./useBreadCrumbSteps";

interface BreadCrumbStepsContextState {
  keyActive: string | number | undefined,
  onSetKey: (key: string | number) => void
}
const BreadCrumbStepsContext = createContext<BreadCrumbStepsContextState>({
  keyActive: undefined,
  onSetKey: (key) => {}
});

export const BreadCrumbStepsProvider: FC = (props) => {
  const {step, onChangeStep} = useBreadCrumbSteps()
  return (
    <BreadCrumbStepsContext.Provider value={{
      keyActive: step,
      onSetKey: onChangeStep
    }}>
      {props.children}
    </BreadCrumbStepsContext.Provider>
  )
};