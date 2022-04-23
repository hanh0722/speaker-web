import React, { ChangeEvent, FC } from "react";
import PropTypes from "prop-types";
import useInput from "../../../../../hook/useInput";
import { LeftSideCreateProductsProps } from "../../../../../types/components/CreateProduct";
import { classList, isRequired, isRequiredEditor } from "../../../../../utils/string";
import { Editor } from "../../../../common";
import { Dropzone, Input } from "../../../../core";
import styles from "./styles.module.scss";
import { Alert } from "@mui/material";

const LeftSide: FC<LeftSideCreateProductsProps> = (props) => {
  const {
    isTouched: isTouchedEditor,
    isValid: isValidEditor,
    onChangeHandler: onChangeEditorValue,
    onTouchedHandler: onTouchEditor,
  } = useInput(null, isRequiredEditor);
  const { isTouched, isValid, onChangeHandler, onTouchedHandler, value } =
    useInput(null, isRequired);
  const {
    className,
    onChangeEditor,
    onChangeTitle,
    onGetImages,
    ...restProps
  } = props;
  const onCallbackFile = (files: Array<string>) => {
    if (onGetImages) {
      onGetImages(files);
    }
  };
  const onChange = (value: string) => {
    if (onChangeEditor) {
      onChangeEditor(value.trim());
    }
    onChangeEditorValue(value.trim());
  };
  const onGetTitle = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChangeHandler(event);
    if (onChangeTitle) {
      onChangeTitle(value.trim());
    }
  };
  return (
    <div
      {...restProps}
      className={classList(`shadow-xs ${styles.container}`, className)}
    >
      <Input
        onBlur={onTouchedHandler}
        value={value}
        error={isTouched && !isValid}
        errorMessage="Product Name must be fill"
        onChange={onGetTitle}
        type="text"
        label="Product Name"
      />
      <div className={styles.editor}>
        <p className={`lh-24 f-16 ${styles.title}`}>Description</p>
        <Editor onBlur={onTouchEditor} onChange={onChange} />
        {isTouchedEditor && !isValidEditor && <Alert className={styles.alert} severity="error">Description must be fill.</Alert>}
      </div>
      <div className={styles.images}>
        <p className={`lh-24 f-16 ${styles.title}`}>Images</p>
        <Dropzone onGetFile={onCallbackFile} />
      </div>
    </div>
  );
};

LeftSide.defaultProps = {
  className: "",
  onChangeEditor: (value) => {},
  onChangeTitle: (value) => {},
  onGetImages: (images) => {},
};

LeftSide.propTypes = {
  className: PropTypes.string,
  onChangeEditor: PropTypes.func,
  onChangeTitle: PropTypes.func,
  onGetImages: PropTypes.func
};

export default LeftSide;
