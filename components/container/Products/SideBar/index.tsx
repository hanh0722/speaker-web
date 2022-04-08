import React from "react";
import styles from './styles.module.scss';

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <h3 className="f-32 weight-500 lh-48">Filters</h3>
    </div>
  )
}

export default SideBar;