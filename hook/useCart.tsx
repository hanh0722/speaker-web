import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { onAddCartUser, onDeleteItemCart } from "../service/class/cart";
import { AppDispatch } from "../store";
import { cartActions } from "../store/slices/cart";
import { BaseResponse } from "../types/request";

export const useAddCartService = () => {
  const [data, setData] = useState<null | BaseResponse>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  
  const onResetAsync = useCallback(() => {
    setData(null);
    setError(null);
    setIsLoading(false);
  }, []);
  const onAddItemToCart = useCallback(async (productId: string, quantity?: number) => {
    onResetAsync();
    setIsLoading(true);
    try{
      const response = await onAddCartUser(productId, quantity);
      if (response.data.code >= 400 || response.status >= 400) {
        throw new Error(response?.data?.message || 'Server Internal Error');
      };
      setIsLoading(false);
      setData(response.data);
      dispatch(cartActions.onChangeCart({
        data: response.data.data,
        quantity: quantity
      }));
    }catch(err: any){
      setError(err?.message);
      setIsLoading(false);
    }
  }, [dispatch, onResetAsync]);


  return {
    onAddItemToCart,
    isLoading,
    data,
    error,
    onResetAsync
  }
};

export const useDeleleItemCart = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<null | BaseResponse>(null);
  const [error, setError] = useState(null);

  const onResetAsync = useCallback(() => {
    setIsLoading(false);
    setData(null);
    setError(null);
  }, []);
  const onDeleteItemInCart = useCallback(async (productId: string, quantity?: number) => {
    onResetAsync();
    setIsLoading(true);
    try{
      const response = await onDeleteItemCart(productId, quantity);
      if (response.status >= 400 || response.data?.code >= 400) {
        throw new Error(response?.data?.message || 'Cannot delete item!');
      };
      setData(response.data);
      setIsLoading(false);
      dispatch(cartActions.onDeleteItemCart({
        id: productId,
        quantity: quantity || 1
      }))
    }catch(err: any) {
      setIsLoading(false);
      setError(err?.message || "Server Internal Error");
    }
  }, [onResetAsync, dispatch]);

  return {
    isLoading,
    data,
    error,
    onDeleteItemInCart,
    onResetAsync
  }
}