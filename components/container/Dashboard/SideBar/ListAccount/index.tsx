import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React, { useState } from "react";
import { ACCOUNTS } from "../../../../../constants/path";
import { classList } from "../../../../../utils/string";
import { Link } from "../../../../core";
import { IconCaret } from "../../../../core/Icons";
import IconUser from "../../../../core/Icons/IconUser";
import styles from './styles.module.scss';

const ListAccount = () => {
  const [isOpenAccount, setIsOpenAccount] = useState(false);

  const onToggleAccount = () => {
    setIsOpenAccount(prevState => !prevState);
  }
  return (
   <List>
     <ListItemButton onClick={onToggleAccount}>
       <ListItemIcon>
         <IconUser/>
       </ListItemIcon>
       <ListItemText primary="Account"/>
       <IconCaret className={classList(styles.caret, isOpenAccount && styles['active-caret'])} variant="sm"/>
     </ListItemButton>
     <Collapse in={isOpenAccount} unmountOnExit mountOnEnter timeout="auto">
       <List className={styles.list} disablePadding>
        {ACCOUNTS.map(({ href, icon: Component, title }) => {
          return (
            <Link activeClassname={styles.active} key={href} href={href}>
              <ListItemButton className={styles.btn}>
                <ListItemIcon>
                  <Component/>
                </ListItemIcon>
                <ListItemText primary={title}/>
              </ListItemButton>
            </Link>
          )
        })}
       </List>
     </Collapse>
   </List>
  )
};

export default ListAccount;