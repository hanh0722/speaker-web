import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ClassNameProps } from "../../../types/string";
import styles from "./styles.module.scss";
import { classList } from "../../../utils/string";
import { ROUTE_NOT_ACTIVE_TRANSITION } from "../../../constants/path";

const WrapperTransition: FC<ClassNameProps> = (props) => {
  const { className, children } = props;
  const { asPath } = useRouter();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (ROUTE_NOT_ACTIVE_TRANSITION.some((value) => value.includes(asPath))) {
      setDisplayChildren(children);
      return;
    }
    if (children !== displayChildren) {
      setIsActive(true);
    }
  }, [children, displayChildren, asPath]);
  const onTransitionEnd = () => {
    setDisplayChildren(children);
    setIsActive(false);
  };
  return (
    <div
      onTransitionEnd={onTransitionEnd}
      className={classList(
        styles.transition,
        isActive ? styles.active : "",
        className
      )}
    >
      {displayChildren}
    </div>
  );
};

export default WrapperTransition;
