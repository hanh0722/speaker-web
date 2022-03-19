import React, { FC, useEffect } from "react";
import propTypes from 'prop-types';
import { ModalProps } from "../../../types/component";
import styles from './styles.module.scss';
import { classList } from "../../../utils/string";

const Modal: FC<ModalProps> = (props) => {
    const {onClick, className, children} = props;

    useEffect(() => {
        document.body.setAttribute('data-active', 'true');
        return () => {
            document.body.removeAttribute('data-active');
        }
    }, []);
    return (
        <div onClick={onClick} className={classList(styles.modal, className)}>
            {children}
        </div>
    )
}

Modal.defaultProps = {
    onClick: () => {},
}

Modal.propTypes = {
    className: propTypes.string,
    onClick: propTypes.func
}

export default Modal;