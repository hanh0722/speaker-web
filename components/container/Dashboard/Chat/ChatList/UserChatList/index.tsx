import { ButtonBase } from "@mui/material";
import React, { FC } from "react";
import { classList } from "../../../../../../utils/string";
import { Image } from "../../../../../core";
import styles from "./styles.module.scss";

const UserChatList: FC = (props) => {
  return (
    <div className={classList("d-flex align-center", styles.container)}>
      <ButtonBase>
        <div className={styles.avatar}>
          <Image src="/default-image.png" alt="" />
        </div>
        <div className={styles.description}>
          <p className="weight-500">Lorem, ipsum.</p>
        </div>
      </ButtonBase>
    </div>
  );
};

export default UserChatList;
