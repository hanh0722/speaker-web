import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import React, { useState } from "react";
import { classList } from "../../../../../utils/string";
import { IconCaret, IconCart } from "../../../../core/Icons";
import IconEdit from "../../../../core/Icons/IconEdit";
import styles from './styles.module.scss';

const ListManagement = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onChangeList = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <List className={styles.list} component={"ul"} id="nested-list-subheader">
      <ListItemButton onClick={onChangeList}>
        <ListItemIcon>
          <IconCart />
        </ListItemIcon>
        <ListItemText primary="Management" />
        <IconCaret className={classList(isOpen && styles.active)} variant="sm"/>
      </ListItemButton>
      <Collapse in={isOpen} unmountOnExit mountOnEnter timeout="auto">
        <List component={"div"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <IconEdit />
            </ListItemIcon>
            <ListItemText>Create</ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};

export default ListManagement;
