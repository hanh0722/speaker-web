import { RefObject, useCallback, useEffect, useMemo, useState } from "react";
import useDropdown from "../../../hook/useDropdown";

interface UseMenuProps<T> {
  ref: RefObject<T>,
  viewContainerRef: RefObject<HTMLElement>
}
const useMenu = <T extends HTMLElement>(props: UseMenuProps<T>) => {
  const [container, setContainer] = useState<undefined | DOMRect>();
  const [position, setPosition] = useState<undefined | DOMRect>();
  const { ref, viewContainerRef } = props;
  const { isToggle, onChangeToggle, setToggleByValue } = useDropdown(ref);
  const getPositionElement = useCallback((ref: RefObject<T>, viewContainerRef: RefObject<HTMLElement>) => {
    const position = ref.current?.getBoundingClientRect();
    setContainer(viewContainerRef.current?.getBoundingClientRect());
    setPosition(position);
  }, []);

  const getDropdownPosition = useMemo(() => {
    if (!position || !container) {
      return null;
    };
    return {
      top: position?.top + position?.height + 10,
      left: position?.left - position?.width - 10 - container?.width
    }
  }, [position, container]);
  useEffect(() => {
    if (ref.current && viewContainerRef.current) {
      getPositionElement(ref, viewContainerRef);
    }
  }, [ref, getPositionElement, viewContainerRef]);
  const onTriggerDropdown = () => {
    onChangeToggle();
  };
  const onForceDropdown = (value: boolean) => {
    setToggleByValue(value);
  }
  return {
    isToggle,
    onTriggerDropdown,
    onForceDropdown,
    getDropdownPosition,
  }
};

export default useMenu;