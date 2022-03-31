/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import useImage from "../../../hook/useImage";
import { ImageProps } from "../../../types/component";
import { classList } from "../../../utils/string";
import styles from "./styles.module.scss";
import Loading from "../Loading";

const Image: FC<ImageProps> = (props) => {
  const { className, src, alt, style } = props;
  const { onHandleErrorImage, onLoadImage, srcImage, isLoading } =
    useImage(src);
  return (
    <>
      {isLoading && (
        <Loading
          className={classList(
            styles.loading,
            "d-flex justify-content-center align-items-center ",
            className
          )}
          style={{ ...style }}
        />
      )}
      <img
        style={{ ...style }}
        src={srcImage || ""}
        onError={onHandleErrorImage}
        alt={alt || ""}
        onLoad={onLoadImage}
        className={classList(
          styles.image,
          isLoading ? "d-none" : "d-block",
          className
        )}
      />
    </>
  );
};

export default Image;
