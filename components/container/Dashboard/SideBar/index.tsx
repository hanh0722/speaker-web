import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ADMIN } from "../../../../constants/roles";
import { RootState } from "../../../../store";
import { User } from "../../../../types/redux";
import { Image } from "../../../core";
import { IconDoubleArrow } from "../../../core/Icons";
import BoxUser from "./BoxUser";
import ListManagement from "./ListManagement";
import styles from "./styles.module.scss";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const user = useSelector<RootState, User | null>((state) => state.user.user);
  const onHidden = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className={styles.main}>
        <div className={styles.sidebar}>
          <div
            className={`d-flex align-center justify-between ${styles.header}`}
          >
            <Image src="/logo.webp" alt="" />
            <IconDoubleArrow onClick={onHidden} />
          </div>
          <BoxUser className={styles.box} />
          {user?.role === ADMIN && <ListManagement />}
        </div>
      </div>
    </>
  );
};

export default SideBar;
