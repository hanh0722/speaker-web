import React, { FC, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { classList } from "../../../utils/string";
import { ListElementProps } from "../../../types/components/ListElement";
import { IconCaretLightRight } from "../../core/Icons";
import Element from "./Element";
import styles from "./styles.module.scss";

const ListElement: FC<ListElementProps> = (props) => {
  const { children, className, defaultTrigger, title, ...restProps } = props;
  const [isActive, setIsActive] = useState(false);

  const onChangeList = () => {
    setIsActive((prevState) => !prevState);
  };
  return (
    <>
      <div {...restProps} className={classList(styles.accordion, className)}>
        <div
          onClick={onChangeList}
          className={`d-flex justify-between align-center ${styles.header}`}
        >
          <p>{title}</p>
          <IconCaretLightRight />
        </div>
        <CSSTransition in={isActive} timeout={300} unmountOnExit mountOnEnter classNames={{
          enter: styles.enter,
          enterActive: styles['enter-actve'],
          exit: styles.exit,
          exitActive: styles['exit-active']
        }}>
          <ul className={`${styles.list}`}>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            {children}
          </ul>
        </CSSTransition>
      </div>
    </>
  );
};

export default Object.assign(ListElement, {
  Element: Element,
});
