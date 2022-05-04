import React, { FC } from "react";
import PropTypes from "prop-types";
import { CreateBlogProps } from "../../../../../types/components/Dashboard";
import { classList } from "../../../../../utils/string";
import { Dropzone, Input } from "../../../../core";
import styles from "./styles.module.scss";
import { Editor } from "../../../../common";
import { isFunction } from "../../../../../types/type";

const LeftBlog: FC<CreateBlogProps> = (props) => {
  const { className, onChange, ...restProps } = props;

  const onChangeEditor = (value: string) => {
    if (isFunction(onChange)) {
      onChange(value);
    }
  }
  return (
    <div {...restProps} className={classList(styles.container, className)}>
      <Input label="Blog Title" />
      <Input label="Short Description" />
      <p className={`f-14 weight-500 color-gray ${styles.label}`}>
        Description
      </p>
      <Editor className={styles.editor} placeholder="Write something new..." onChange={onChangeEditor}/>
      <p className={`f-14 weight-500 color-gray ${styles.label}`}>Cover</p>
      <Dropzone />
    </div>
  );
};

LeftBlog.defaultProps = {
  className: "",
};

LeftBlog.propTypes = {
  className: PropTypes.string,
};

export default LeftBlog;
