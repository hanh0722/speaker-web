import React, { FC } from "react";
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";
import { CartProps } from "../../../types/component";
import { Modal } from "../../common";
import styles from "./styles.module.scss";
import { classList } from "../../../utils/string";

const Cart: FC<CartProps> = (props) => {
    const { isActiveCart, className,onHandleCart } = props;
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <div className={classList('bg-white shadow-sm' ,styles.cart)}>

          </div>
          <Modal />
        </>,
        document.getElementById("portal")!
      )}
    </>
  );
};

Cart.defaultProps = {
    className: '',
    isActiveCart: false,
    onHandleCart: () => {},
}

Cart.propTypes = {
    className: PropTypes.string,
    isActiveCart: PropTypes.bool.isRequired,
    onHandleCart: PropTypes.func
}

export default Cart;
