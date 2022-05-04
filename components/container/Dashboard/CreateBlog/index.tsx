import React, { FC } from "react";
import { ClassNameProps } from "../../../../types/string";
import { classList } from "../../../../utils/string";
import LeftBlog from "./LeftBlog";
import RightBlog from "./RightBlog";
import styles from './styles.module.scss';

const CreateBlog: FC<ClassNameProps> = (props) => {
  const { className, ...restProps } = props;
  return (
    <div className={classList("d-flex", styles.container, className)}>
      <LeftBlog/>
      <RightBlog/>
    </div>
  )
}

export default CreateBlog;