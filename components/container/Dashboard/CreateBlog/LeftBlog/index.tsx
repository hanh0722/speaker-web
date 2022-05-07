import React, { ChangeEvent, FC } from "react";
import PropTypes from "prop-types";
import { CreateBlogProps } from "../../../../../types/components/Dashboard";
import { classList, isRequired } from "../../../../../utils/string";
import { Dropzone, Input } from "../../../../core";
import styles from "./styles.module.scss";
import { Editor } from "../../../../common";
import { isFunction } from "../../../../../types/type";
import useInput from "../../../../../hook/useInput";

const LeftBlog: FC<CreateBlogProps> = (props) => {
  const { className, onChange, onGetTitle, onGetImage, onGetShortDesc, ...restProps } =
    props;
  const {
    value: valueTitle,
    isTouched: isTouchedTitle,
    isValid: isValidTitle,
    onChangeHandler: onChangeTitle,
    onTouchedHandler: onTouchTitle,
  } = useInput("and", isRequired);

  const {
    onChangeHandler: onChangeShortDescription,
    isTouched: isTouchedShortDescription,
    isValid: isValidShortDescription,
    onTouchedHandler: onTouchedShortDesc,
    value: valueShortDesc,
  } = useInput("and", isRequired);

  const onChangeEditor = (value: string) => {
    if (isFunction(onChange)) {
      onChange(value);
    }
  };
  const onChangeTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeTitle(event);
    if (isFunction(onGetTitle)) {
      onGetTitle(valueTitle);
    }
  };
  const onChangeDesc = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeShortDescription(event);
    if (isFunction(onGetShortDesc)) {
      onGetShortDesc(valueShortDesc);
    }
  };
  const onGetFileHandler = (file: Array<string>) => {
    if (isFunction(onGetImage)) {
      onGetImage(file[0]);
    }
  }
  return (
    <div {...restProps} className={classList(styles.container, className)}>
      <Input
        onChange={onChangeTitleHandler}
        onBlur={onTouchTitle}
        error={isTouchedTitle && !isValidTitle}
        errorMessage="Title is required"
        label="Blog Title"
      />
      <Input
        onChange={onChangeDesc}
        onBlur={onTouchedShortDesc}
        error={isTouchedShortDescription && !isValidShortDescription}
        errorMessage="Short Description is required"
        label="Short Description"
      />
      <p className={`f-14 weight-500 color-gray ${styles.label}`}>
        Description
      </p>
      <Editor
        className={styles.editor}
        placeholder="Write something new..."
        onChange={onChangeEditor}
      />
      <p className={`f-14 weight-500 color-gray ${styles.label}`}>Cover</p>
      <Dropzone onGetFile={onGetFileHandler} options={{
        maxFiles: 1,
        multiple: false
      }}/>
    </div>
  );
};

LeftBlog.defaultProps = {
  className: "",
  onGetShortDesc: (value) => {},
  onChange: (value) => {},
  onGetImage: (value) => {},
  onGetTitle: (value) => {} 
};

LeftBlog.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  onGetImage: PropTypes.func,
  onGetTitle: PropTypes.func,
  onGetShortDesc: PropTypes.func
};

export default LeftBlog;
