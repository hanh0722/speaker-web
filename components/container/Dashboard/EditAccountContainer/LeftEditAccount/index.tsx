import React, { LegacyRef, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store";
import { User } from "../../../../../types/redux";
import { UploadFile } from "../../../../common";
import { Image } from "../../../../core";
import { IconPhoto } from "../../../../core/Icons";
import styles from "./styles.module.scss";

const LeftEditAccount = () => {
  const fileRef = useRef<UploadFile>(null);
  const user = useSelector<RootState, User | null>((state) => state.user?.user);

  const onUploadHandler = () => {
    fileRef.current?.onClickFile();
  }
  return (
    <>
      <div className={styles.edit}>
        <div className="d-flex align-center justify-end">
          <div
            className={`${styles.badge} ${
              !user?.is_validation && styles.unactive
            }`}
          >
            {user?.is_validation ? "Active" : "Not Validation"}
          </div>
        </div>
        <div className="d-flex align-center justify-center">
          <div className={`d-flex align-center justify-center ${styles.flow}`}>
            <div className={styles.user}>
              <span
                onClick={onUploadHandler}
                className={`d-flex align-center justify-center flex-column ${styles.upload}`}
              >
                <IconPhoto variant="lg" />
                <p className="f-12">Update Photo</p>
              </span>
              <Image src="/default-image.png" />
            </div>
          </div>
        </div>
      </div>
      <UploadFile ref={fileRef}/>
    </>
  );
};

export default LeftEditAccount;
