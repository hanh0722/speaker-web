import React, { FC, useRef } from "react";
import { classList, isString } from "../../../utils/string";
import { DropzoneProps } from "../../../types/components/Dropzone";
import styles from "./styles.module.scss";
import { IconDropzone } from "../Icons";
import useDropzoneController from "./useDropzoneController";
import { fileToImage } from "../../../utils/url";
import ImageDropzone from "./ImageDropzone";
import Button from "../Button";

const Dropzone: FC<DropzoneProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { className, onGetFile, options, ...restProps } = props;

  const { getRootProps, isLoading, getInputProps, files, onOpenFile, onFilterFile, onClearFile } =
    useDropzoneController({
      ref: inputRef,
      ...props,
    });

  return (
    <>
      <div
        {...restProps}
        onClick={onOpenFile}
        className={classList(styles.container, isLoading && styles['loading-container'], className)}
      >
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} ref={inputRef} />
        </div>
        <div
          className={`d-flex justify-between align-center ${styles.description}`}
        >
          <div className={styles.image}>
            <IconDropzone variant="unset" />
          </div>
          <div className={styles.content}>
            <h4>Drop or Select file</h4>
            <p className="color-gray">
              Drop files here or click <span>browse</span> through your machine
            </p>
          </div>
        </div>
      </div>
      {files.length > 0 && (
        <div className={styles.files}>
          <div className={styles.demo}>
            {files.map((item) => {
              return (
                <ImageDropzone
                  isLoading={item.isLoading}
                  onDelete={onFilterFile}
                  id={item.id}
                  key={item.id}
                  src={isString(item.file) ? (item.file as string) : fileToImage(item.file as File)}
                />
              );
            })}
          </div>
          <div className={`d-flex justify-end align-center gap-16 ${styles['btn-file']}`}>
            <Button onClick={onClearFile} variant="outlined" color="inherit" prefix="normal">Remove All</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Dropzone;
