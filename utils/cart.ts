import { CartItemProps } from "../types/api/page/cart";
import { BaseProductProps } from "../types/request";

export const onChangeItemCart = (
  cart: Array<CartItemProps>,
  data: BaseProductProps,
  quantity?: number
) => {
  let newCart: Array<CartItemProps> = [...cart];
  const itemIndexInCart = cart.findIndex(
    (item) => item.productId._id === data._id
  );
  if (itemIndexInCart === -1) {
    newCart.push({
      productId: data,
      quantity: quantity || 1,
    });
  } else {
    newCart = [...cart];
    newCart[itemIndexInCart].quantity += quantity || 1;
  }

  return newCart;
};

export const updateTotalPrice = (cart: Array<CartItemProps>) => {
  return cart.reduce((acc, { productId, quantity }) => {
    return acc + productId.price * quantity;
  }, 0);
};

export const updateTotalQuantity = (cart: Array<CartItemProps>) => {
  return cart.reduce((acc, { productId, quantity }) => {
    return acc + quantity
  }, 0);
};
