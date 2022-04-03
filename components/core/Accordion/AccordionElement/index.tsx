import React, { FC, useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { classList } from "../../../../utils/string";
import { AccordionElementProps } from "../../../../types/components/Accordion";
import { AccordionContext } from "../AbstractAccordion";
import PlusAccordion from "../PlusAccordion";
import styles from "./styles.module.scss";

const AccordionElement: FC<AccordionElementProps> = (props) => {
  const { idActive, onChangeAccordion } = useContext(AccordionContext);
  const { id, title, className, children, ...restProps } = props;

  const onHandleAccordion = () => {
    onChangeAccordion(id);
  };
  return (
    <div {...restProps} className={classList(styles.container, idActive === id ? styles.active : '', className)}>
      <div
        onClick={onHandleAccordion}
        className={`d-flex justify-between align-center ${styles.title}`}
      >
        <p className="f-18 lh-24">{title}</p>
        <PlusAccordion isActive={idActive === id}/>
      </div>
      <CSSTransition
        in={idActive === id}
        timeout={1000}
        unmountOnExit
        mountOnEnter
        classNames={{
          enter: styles.enter,
          enterActive: styles["enter-active"],
          exit: styles.exit,
          exitActive: styles["exit-active"],
        }}
      >
        <div className={`lh-24 f-16 ${styles.description}`}>
          {children}
        </div>
      </CSSTransition>
    </div>
  );
};

export default AccordionElement;
