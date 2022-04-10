import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { cartActions, fetchCart } from "../../../store/slices/cart";
import { UserState } from "../../../types/redux";

const CartWrapper: FC = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoggedIn, token } = useSelector<RootState>(state => state.user) as UserState;
  useEffect(() => {
    if (isLoggedIn && token) {
      dispatch(fetchCart(token));
    } else {
      dispatch(cartActions.onReset());
    }
  }, [isLoggedIn, dispatch, token]);
  return (
    <>
      {props.children}
    </>
  )
}

export default CartWrapper;
