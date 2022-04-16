import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { User } from "../../../../types/redux";
import { Image } from "../../../core";
import { IconCart, IconDoubleArrow } from "../../../core/Icons";
import BoxUser from "./BoxUser";
import ListManagement from "./ListManagement";
import styles from "./styles.module.scss";

const SideBar = () => {
  const user = useSelector<RootState, User | null>((state) => state.user.user);
  return (
    <div className={styles.sidebar}>
      <div className={`d-flex align-center justify-between ${styles.header}`}>
        <Image src="/logo.webp" alt="" />
        <IconDoubleArrow />
      </div>
      <BoxUser className={styles.box} />
      <ListManagement/>
    </div>
  );
};

export default SideBar;
