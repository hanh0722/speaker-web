import { useCallback, useEffect, useState } from "react";

const useInterval = (time: number, defaultValue?: boolean, timeDecrement?: number) => {
  const [isActive, setIsActive] = useState(defaultValue ? defaultValue : false)
  const [timeValue, setTimeValue] = useState(time);

  useEffect(() => {
    console.log(isActive, timeValue);
    if (!isActive || timeValue === 0) {
      setIsActive(false);
      return;
    };
    const timeout = setInterval(() => {
      if (timeValue === 0){
        setIsActive(false);
        clearInterval(timeout);
      }
      setTimeValue(prevState => {
        return prevState - 1;
      });
    }, timeDecrement || 1000);
    
    return () => {
      clearInterval(timeout);
    }
  }, [timeDecrement, isActive, timeValue]);

  const onSetInterval = useCallback((isRunning: boolean, time: number) => {
    setIsActive(isRunning);
    setTimeValue(time);
  }, []);

  return {
    onSetInterval,
    isActive,
    timeValue
  }
};

export default useInterval;