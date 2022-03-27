import React, { FC } from "react";
import { Button, Link, Modal } from "../../../components/core";
import { IconSuccessOTP } from "../../../components/core/Icons";
import { LOGIN } from "../../../constants/path";
import { ModalExtendsProps } from "../../../types/component";
import styles from "./styles.module.scss";

const ModalOTP: FC<ModalExtendsProps> = (props) => {
  const {show, onHide, ...pProps} = props;
  return (
    <Modal show={show} variant="md" onHide={onHide} {...pProps}>
      <Modal.Body closeBody>
        <div className="text-center">
          <IconSuccessOTP variant="unset" className={styles.success} />
          <div className={styles.content}>
            <p>Validate Successfully!</p>
            <p>You created account successfully</p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="text-center">
        <Link href={LOGIN}>
          <Button
            variant="outlined"
            prefix="normal"
            color="success"
            size="large"
          >
            Back To Login
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

ModalOTP.defaultProps = Modal.defaultProps;
ModalOTP.propTypes = Modal.propTypes;

export default ModalOTP;
