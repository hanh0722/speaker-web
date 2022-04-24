import { RefObject, useCallback, useEffect, useState } from "react";

function useDropdown<T extends Node>(
  element: RefObject<T>,
  defaultValue?: boolean
) {
  const [isToggle, setIsToggle] = useState(defaultValue || false);

  const onHandleClick = useCallback(
    (event: Event) => {
      const target = event.target as Node;
      if (!element.current?.contains(target) && isToggle) {
        setIsToggle(false);
      }
    },
    [element, isToggle]
  );
  useEffect(() => {
    document.addEventListener("mousedown", onHandleClick);
    return () => {
      document.removeEventListener("mousedown", onHandleClick);
    };
  }, [onHandleClick]);

  const onChangeToggle = () => {
    setIsToggle((prevState) => !prevState);
  };

  const setToggleByValue = (value: boolean) => {
    setIsToggle(value);
  };
  return {
    isToggle,
    onChangeToggle,
    setToggleByValue,
  };
}

export default useDropdown;
