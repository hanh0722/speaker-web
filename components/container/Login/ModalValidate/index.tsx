import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal } from "../../../core";
import styles from "./styles.module.scss";
import { IconError } from "../../../core/Icons";
import { VALIDATE_AFTER_REGISTER } from "../../../../constants/path";
import { AppDispatch } from "../../../../store";
import { ModalValidateProps } from "../../../../types/components/ModalValidate";
import { authActions } from "../../../../store/slices/auth";
import { useRouter } from "next/router";

const ModalValidate: FC<ModalValidateProps> = (props) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { show, onHide, username, ...restProps } = props;

  const onHandleClick = () => {
    dispatch(authActions.onSetUsername(username));
    router.push(VALIDATE_AFTER_REGISTER);
  }
  return (
    <Modal {...restProps} show={show} onHide={onHide}>
      <Modal.Body>
        <div className={`text-center ${styles.container}`}>
          <IconError className={styles.icon} variant="unset" />
          <h4 className="f-24 weight-600 lh-32">Oops!</h4>
          <p>Your account {"hasn't"} activated</p>
            <Button
              onClick={onHandleClick}
              variant="outlined"
              size="large"
              prefix="normal"
              color="primary"
            >
              Active Now
            </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalValidate;
