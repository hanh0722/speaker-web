import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store";
import { User } from "../../../../../types/redux";
import { ClassNameProps } from "../../../../../types/string";
import { classList } from "../../../../../utils/string";
import { Image } from "../../../../core";
import styles from './styles.module.scss';

const BoxUser: FC<ClassNameProps> = (props) => {
  const user = useSelector<RootState, User | null>(state => state.user.user);
  const { className, ...restProps } = props;
  return (
    <div {...restProps} className={classList('d-flex align-center', styles.box, className)}>
      <div className={styles.avatar}>
        <Image src="/default-image.png" alt=""/>
      </div>
      <div className={styles.content}>
        <p className="f-16 weight-500 lh-24">{user?.name}</p>
        <p className="color-gray f-14">{user?.role}</p>
      </div>
    </div>
  );
};

export default BoxUser;