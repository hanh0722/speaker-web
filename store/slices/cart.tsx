import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { onFetchCartUser } from "../../service/class/cart";
import {
  CartResponse,
  CartItemProps,
  CartItem,
} from "../../types/api/page/cart";
import { onChangeItemCart, updateTotalPrice, updateTotalQuantity } from "../../utils/cart";

export interface CartStoreState {
  isOpenCart: boolean;
  cart: Array<CartItemProps>;
  isLoadingCart: boolean;
  error: null | string;
  total: number;
  totalProducts: number
}
const initialState: CartStoreState = {
  isOpenCart: false,
  cart: [],
  isLoadingCart: false,
  error: null,
  total: 0,
  totalProducts: 0
};

const cartSlice = createSlice({
  name: "cart-slice",
  initialState,
  reducers: {
    onLoadingCart(state) {
      state.isLoadingCart = true;
    },
    onAddItemToCart(state, action) {
      const { data } = action.payload as CartResponse;
      state.cart = data;
      state.total = updateTotalPrice(data);
      state.totalProducts = updateTotalQuantity(data);
      
    },
    onChangeActiveCart(state) {
      state.isOpenCart = !state.isOpenCart;
    },
    onFinishCart(state) {
      state.isLoadingCart = false;
    },
    onErrorCart(state, action) {
      state.error = action.payload;
    },
    onReset(state) {
      state = {
        ...initialState,
      };
    },
    onChangeCart(state, action) {
      const { data, quantity } = action.payload;
      const newCart = onChangeItemCart(state.cart, data, quantity);
      state.cart = newCart;
      state.total = updateTotalPrice(newCart);
      state.totalProducts = updateTotalQuantity(newCart);
    },
    onDeleteItemCart(state, action: { payload: CartItem }) {
      const { id, quantity } = action.payload as CartItem;
      let newCart = [...state.cart];
      const itemIndex = newCart.findIndex((item) => item.productId._id === id);
      const product = newCart[itemIndex];
      if (product.quantity - quantity <= 0 || quantity === -1) {
        newCart = newCart.filter((item) => item.productId._id !== id);
      } else {
        newCart[itemIndex].quantity -= quantity;
      }
      state.cart = [...newCart];
      state.total = updateTotalPrice(newCart);
      state.totalProducts = updateTotalQuantity(newCart);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;

export const fetchCart = (token: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(cartActions.onLoadingCart());
      const response = await onFetchCartUser(token);
      if (response.status >= 400 || response.data?.code >= 400) {
        const error = new Error(response?.data?.message);
        throw error;
      }
      dispatch(cartActions.onAddItemToCart(response.data));
      dispatch(cartActions.onFinishCart());
    } catch (err: any) {
      dispatch(cartActions.onFinishCart());
      dispatch(
        cartActions.onErrorCart(
          err?.message ||
            err?.response?.data?.message ||
            "Server Internal Error"
        )
      );
    }
  };
};
