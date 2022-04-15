import axios, { AxiosResponse } from "axios";
import { useCallback, useState } from "react";
import { BaseResponse } from "../types/request";

interface UseCallApiProps<T> {
  request: () => Promise<T>;
  onSuccess?: (data: T) => void;
  onError?: (err: any) => void;
  isToastNotification?: boolean 
}

interface ResponseCallApi<T> extends AxiosResponse<T> {

}
const useCallApi = <T extends AxiosResponse>({request, onSuccess, onError, isToastNotification = false}: UseCallApiProps<T>) => {
  const [isLoading, setIsLoading] = useState(false);

  const onSendRequest = useCallback(async () => {
    try{
      setIsLoading(true);
      const response = await request();
      if (response.data.status >= 400 || response.data?.code >= 400) {
        if (onError) {
          setIsLoading(false);
          onError(response);
        }
      };
      if (onSuccess) {
        setIsLoading(false);
        onSuccess(response);
      }
    }catch(err: any) {
      if (onError) {
        onError(err);
        setIsLoading(false);
      }
    };
  }, []);

  return {
    isLoading,
    onSendRequest
  }
}

export default useCallApi;