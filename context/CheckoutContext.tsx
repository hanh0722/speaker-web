import { createContext, useState } from "react";
import { STEP_CHECKOUT } from "../constants/steps";
import usePrevious from "../hook/usePrevious";

interface ContextSteps {
  step: STEP_CHECKOUT
}
const CheckoutStepContext = createContext<ContextSteps>({
  step: STEP_CHECKOUT.INFOR_CART
});

export const CheckoutStepProvider = () => {
  const [step, setStep] = useState(STEP_CHECKOUT.INFOR_CART);
  const previousStep = usePrevious(step);

  const onChangeStep = () => {

  }
  return (
    <CheckoutStepContext.Provider value={{
      step: step
    }}>

    </CheckoutStepContext.Provider>
  )
}