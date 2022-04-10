import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { onAddCartUser } from "../service/class/cart";
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
  }, [dispatch]);

  return {
    onAddItemToCart,
    isLoading,
    data,
    error,
    onResetAsync
  }
};

export const useDeleteItemService = () => {
  
}