import React, { ChangeEvent, FC, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { LeftEditProductProps } from "../../../../../types/components/EditProduct";
import styles from "./styles.module.scss";
import { Dropzone, Input } from "../../../../core";
import useInput from "../../../../../hook/useInput";
import { classList, isRequired } from "../../../../../utils/string";
import { Editor } from "../../../../common";
import { isFunction } from "../../../../../types/type";

const LeftBlock: FC<LeftEditProductProps> = (props) => {
  const { product, onChangeDescription, onChangeTitle, onChangeImages, className, ...restProps } = props;
  const [valueEditor, setValueEditor] = useState<string>(product.description);
  const {
    isTouched,
    isValid,
    onChangeHandler,
    onTouchedHandler,
    value,
    forceUpdateValue,
  } = useInput("and", isRequired);

  useEffect(() => {
    if (product?.title) {
      forceUpdateValue(product?.title);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  const onChangeEditor = (value: string) => {
    setValueEditor(value);
    if (isFunction(onChangeDescription)) {
      onChangeDescription(value);
    }
  };

  const onChangeTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeHandler(event);
    if (isFunction(onChangeTitle)) {
      onChangeTitle(event.target.value);
    }
  }

  const getInitFile = useMemo(() => {
    const { images } = product;
    return images.map((item, index) => {
      return {
        file: item,
        id: index.toString(),
        isLoading: false,
      };
    });
  }, [product]);

  const onGetFileHandler = (file: Array<string>) => {
    if (isFunction(onChangeImages)) {
      onChangeImages(file);
    }
  }

  return (
    <div {...restProps} className={classList(styles.left, className)}>
      <Input
        value={value}
        onChange={onChangeTitleHandler}
        onBlur={onTouchedHandler}
        error={isTouched && !isValid}
        errorMessage="Product Name is must filled"
        label="Product Name"
      />
      <p className={`f-16 lh-24 ${styles.label}`}>Description</p>
      <Editor initialValue={product?.description} onChange={onChangeEditor} />
      <p className={`f-16 lh-24 ${styles.label} ${styles.img}`}>Images</p>
      <Dropzone onGetFile={onGetFileHandler} initFiles={getInitFile} className={styles.dropzone}/>
    </div>
  );
};

LeftBlock.defaultProps = {
  product: undefined,
  className: "",
  onChangeDescription: (value) => {},
  onChangeTitle: (value) => {},
  onChangeImages: (images) => {}
};

LeftBlock.propTypes = {
  className: PropTypes.string,
  product: PropTypes.any.isRequired,
  onChangeDescription: PropTypes.func,
  onChangeTitle: PropTypes.func,
  onChangeImages: PropTypes.func
};

export default LeftBlock;
