import React, { FC } from "react";
import SideBar from "../../container/Dashboard/SideBar";
import styles from './styles.module.scss';
const DashboardLayout: FC = (props) => {
  return (
    <div className={`${styles.layout}`}>
      <SideBar/>
      {props.children}
    </div>
  );
};

export default DashboardLayout;