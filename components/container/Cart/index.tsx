import React, { FC } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { CartProps } from "../../../types/component";
import { Modal } from "../../common";
import styles from "./styles.module.scss";
import { classList } from "../../../utils/string";
import { CSSTransition } from "react-transition-group";
import ScrollView from "../../common/ScrollView";
import { IconClose } from "../../core/Icons";
import { AppDispatch, RootState } from "../../../store";
import { cartActions, CartStoreState } from "../../../store/slices/cart";
import { Button, Link } from "../../core";
import { CART } from "../../../constants/path";

const Cart: FC<CartProps> = (props) => {
  const { className } = props;
  const dispatch = useDispatch<AppDispatch>();
  const { isOpenCart, cart } = useSelector<RootState, CartStoreState>(
    (state) => state.cart
  );

  const onDispatchCart = () => {
    dispatch(cartActions.onChangeActiveCart());
  };
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <CSSTransition
            in={isOpenCart}
            classNames="fade-left"
            unmountOnExit
            mountOnEnter
            timeout={500}
          >
            <>
              <ScrollView
                className={classList(
                  "bg-white shadow-sm",
                  styles.cart,
                  className
                )}
                scrollable
              >
                <ScrollView.Header>
                  <div
                    className={`d-flex justify-between align-center ${styles.header}`}
                  >
                    <h3 className="f-20 weight-500">Shopping Cart</h3>
                    <IconClose
                      onClick={onDispatchCart}
                      className="pointer"
                      variant="lg"
                    />
                  </div>
                </ScrollView.Header>
                <ScrollView.Body>
                  {cart.length === 0 && (
                    <p className="f-16">Your cart is empty</p>
                  )}
                </ScrollView.Body>
                {cart.length > 0 && (
                  <ScrollView.Footer className={styles.footer}>
                    <p>
                      <span>Shipping:</span>
                      <span>FREE</span>
                    </p>
                    <p>
                      <span>Subtotal:</span>
                      <span>$1000</span>
                    </p>
                    <Button fullWidth size="large">
                      Checkout
                    </Button>
                    <Link className="text-center d-block f-14" href={CART}>
                      View Cart
                    </Link>
                  </ScrollView.Footer>
                )}
              </ScrollView>
              <Modal onClick={onDispatchCart} />
            </>
          </CSSTransition>
        </>,
        document.getElementById("portal")!
      )}
    </>
  );
};

Cart.defaultProps = {
  className: "",
};

Cart.propTypes = {
  className: PropTypes.string,
};

export default Cart;