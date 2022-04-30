import React, { useState } from "react";

const useBreadCrumbSteps = (initialStep?: number | string) => {
  const [step, setStep] = useState<number | string | undefined>(initialStep || undefined);
  
  const onChangeStep = (value: number | string) => {
    setStep(value);
  };

  return {
    step,
    onChangeStep
  }
}

export default useBreadCrumbSteps;