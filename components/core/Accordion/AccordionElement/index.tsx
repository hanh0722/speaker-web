import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { AccordionContext } from "../AbstractAccordion";
import PlusAccordion from "../PlusAccordion";
import styles from "./styles.module.scss";

const AccordionElement = () => {
  const element = useContext(AccordionContext);
  console.log(element);
  return (
    <div className={styles.container}>
      <div className={`d-flex justify-between align-center ${styles.title}`}>
        <p>How did my package ship?</p>
        <PlusAccordion />
      </div>
      <CSSTransition in timeout={300} unmountOnExit mountOnEnter>
        <>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          autem molestiae enim facilis quidem, saepe, blanditiis fugiat odit
          aspernatur numquam animi sunt placeat esse dicta ut adipisci
          dignissimos obcaecati. Impedit odit porro, eum dolore ut error magni
          dolores modi. Ipsam?
        </>
      </CSSTransition>
    </div>
  );
};

export default AccordionElement;
