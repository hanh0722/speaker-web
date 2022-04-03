import React, { FC } from "react";
import styles from './styles.module.scss';
import {generateArray} from '../../../../utils/array'
import { PlusAccordionProps } from "../../../../types/components/Accordion";
import { classList } from "../../../../utils/string";

const PlusAccordion: FC<PlusAccordionProps> = (props) => {
  const { isActive, className } = props;
  return (
    <div className={classList(`flex-column ${styles.plus}`, isActive ? styles.active : '', className)}>
    {generateArray(2).map(item => {
      return (
        <div key={item}/>
      )
    })}
    </div>
  )
}

export default PlusAccordion;