import React, { FC } from "react";
import { ImageTransitionProps } from "../../../types/components/ImageTransition";
import { isArray } from "../../../utils/array";
import { classList } from "../../../utils/string";
import { Image } from "../../core";
import styles from "./styles.module.scss";

const ImageTransition: FC<ImageTransitionProps> = (props) => {
  const { images, className } = props;

  if (!isArray(images)) {
    // @ts-ignore
    return <div className={classList(className)}><Image alt="" src={images} /></div>;
  }
  if (images?.length === 0) {
    return <div className={classList(className)}><Image src={'/image/default-collection.svg'} alt=""/></div>
  }
  return (
    <div className={classList(styles.images, className)}>
      {/* @ts-ignore */}
      {images?.slice(0, 2).map((src, index) => {
        return <Image className={styles.transition} src={src} alt="" key={index}/>
      })}
    </div>
  );
};

export default ImageTransition;
