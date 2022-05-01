import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { ToastNotification } from "../components/core";
import { ErrorProps } from "../types/base";
import { BaseResponse } from "../types/request";

interface UseCallApiProps<T> {
  request: (params?: any) => Promise<AxiosResponse<T>> | undefined;
  onSuccess?: (data: T) => void;
  onError?: (err: any) => void;
  isToastNotification?: boolean 
}

const useCallApi = <T extends BaseResponse>({request, onSuccess, onError, isToastNotification = false}: UseCallApiProps<T>) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    return () => {
      setIsLoading(false);
    }
  }, []);
  const onSendRequest = async (params?: any) => {
    try{
      if (!request) {
        return;
      }
      setIsLoading(true);
      const response = await request(params);
      if (!response) {
        return;
      }
      if (response.status >= 400 || response.data.code >= 400) {
        const message = response?.data?.message || "Server Internal Error"
        const error: ErrorProps = new Error(message);
        error.code = response?.status || response?.data?.code || 500;
        throw error;
        
      };
      if (onSuccess) {
        onSuccess(response.data);
      }
      setIsLoading(false);
    }catch(err: any) {
      if (isToastNotification) {
        ToastNotification.error( err?.response?.data?.message || err?.message || "Server Internal Error");
      }
      if (onError) {
        onError(err);
      }
      setIsLoading(false);
    };
  };

  return {
    isLoading,
    onSendRequest
  }
}

export default useCallApi;