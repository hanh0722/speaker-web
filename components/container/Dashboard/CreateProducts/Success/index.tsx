import React, { FC } from "react";
import PropTypes from "prop-types";
import { ModalCoreProps } from "../../../../../types/base";
import { Button, Modal, Link } from "../../../../core";
import { IconLoveSuccess } from "../../../../core/Icons";
import styles from "./styles.module.scss";

const Success: FC<ModalCoreProps> = (props) => {
  const { onHide, show = false } = props;
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Body className={styles.body} closeBody>
          <div className={`d-flex justify-center align-center ${styles.icon}`}>
            <IconLoveSuccess variant="unset" />
          </div>
          <h4 className="f-20 weight-500 text-center lh-32">
            Created Product Successfully
          </h4>
          <p className="text-center">Thank you for creating product!</p>
        </Modal.Body>
        <Modal.Footer className="text-center">
          <Link href={'/'}>
            <Button variant="outlined" prefix="normal" color="success">
              Check now!
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Success;

Success.defaultProps = {
  onHide: () => {},
  show: false,
};

Success.propTypes = {
  onHide: PropTypes.func,
  show: PropTypes.bool,
};
