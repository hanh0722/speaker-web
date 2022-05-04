import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { MANAGEMENT } from "../../../../../constants/path";
import { MANAGE } from "../../../../../constants/type";
import { classList } from "../../../../../utils/string";
import { Link } from "../../../../core";
import { IconCaret, IconCart } from "../../../../core/Icons";
import styles from "./styles.module.scss";

const ListManagement = () => {
  const { asPath } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const onChangeList = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <List className={styles.list} component={"ul"} id="nested-list-subheader">
      <ListItemButton className={styles['list-title']} onClick={onChangeList}>
        <ListItemIcon>
          <IconCart />
        </ListItemIcon>
        <ListItemText primary="Management" />
        <IconCaret
          className={classList(styles.icon, isOpen && styles.active)}
          variant="sm"
        />
      </ListItemButton>
      <Collapse in={isOpen} unmountOnExit mountOnEnter timeout="auto">
        <List component={"div"} disablePadding>
          {MANAGEMENT.map(({ href, icon: Component, title }, index) => {
            return (
              <Link activeClassname={styles['active-path']} key={index} href={href}>
                <ListItemButton className={styles.button}>
                  <ListItemIcon>
                    <Component />
                  </ListItemIcon>
                  <ListItemText>{title}</ListItemText>
                </ListItemButton>
              </Link>
            );
          })}
        </List>
      </Collapse>
    </List>
  );
};

export default ListManagement;
