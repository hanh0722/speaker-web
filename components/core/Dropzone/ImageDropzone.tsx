import React, { FC } from "react";
import PropTypes from "prop-types";
import { ImageDropzoneProps } from "../../../types/components/Dropzone";
import { classList } from "../../../utils/string";
import Image from "../Image";
import styles from "./styles.module.scss";
import { IconClose } from "../Icons";
import Button from "../Button";
import { LoadingSpinner } from "../../common";

const ImageDropzone: FC<ImageDropzoneProps> = (props) => {
  const { src, className, onDelete, id, isLoading } = props;
  const onDeleteImage = () => {
    if (onDelete) {
      onDelete(id)
    }
  }
  return (
    <div className={classList('d-flex justify-center align-center', styles.img, isLoading && styles.loading, className)}>
      {isLoading && <LoadingSpinner className={styles.spinner}/>}
      <div className={styles.single}>
        <Image src={src} alt="" />
      </div>
      <Button onClick={onDeleteImage} variant="text" prefix="normal" className={styles.close}>
        <IconClose/>
      </Button>
    </div>
  );
};

ImageDropzone.defaultProps = {
  className: "",
};
ImageDropzone.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ImageDropzone;
