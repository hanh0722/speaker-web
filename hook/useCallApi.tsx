import axios, { AxiosResponse } from "axios";
import { useCallback, useState } from "react";
import { ToastNotification } from "../components/core";
import { BaseResponse } from "../types/request";

interface UseCallApiProps<T> {
  request?: () => Promise<AxiosResponse<T>>;
  onSuccess?: (data: T) => void;
  onError?: (err: any) => void;
  isToastNotification?: boolean 
}

const useCallApi = <T extends BaseResponse>({request, onSuccess, onError, isToastNotification = false}: UseCallApiProps<T>) => {
  const [isLoading, setIsLoading] = useState(false);

  const onSendRequest = async () => {
    try{
      if (!request) {
        return;
      }
      setIsLoading(true);
      const response = await request();
      if (response.status >= 400 || response.data.code >= 400) {
        if (onError) {
          setIsLoading(false);
          onError(response);
        }
      };
      if (onSuccess) {
        setIsLoading(false);
        onSuccess(response.data);
      }
    }catch(err: any) {
      if (isToastNotification) {
        ToastNotification.error(err?.message || "Server Internal Error");
      }
      if (onError) {
        onError(err);
        setIsLoading(false);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  return {
    isLoading,
    onSendRequest
  }
}

export default useCallApi;