import React from "react";
import { ListElement } from "../../../common";
import styles from './styles.module.scss';

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <h3 className="f-32 weight-400 lh-48">Filters</h3>
      <ListElement title="Availability"/>
    </div>
  )
}

export default SideBar;