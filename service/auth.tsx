import { BASE_URL } from "../utils/config";
import useFetch from "../hook/useFetch";
import { useCallback } from "react";
import { BaseResponse } from "../types/request";

const AUTH_URL = `${BASE_URL}/api/auth`;

export const useRegister = () => {
  const { isLoading, data, error, request, onResetAsync } =
    useFetch<BaseResponse>();

  const onRegister = useCallback(
    (name: string, username: string, password: string, info: string) => {
      request({
        url: `${AUTH_URL}/register`,
        method: "POST",
        data: {
          username,
          password,
          name,
          info
        },
      });
    },
    [request]
  );
  return {
    onRegister,
    isLoading,
    data,
    error,
    onResetAsync,
  };
};

export const useAuthenticate = () => {
  const { isLoading, data, error, request, onResetAsync } =
    useFetch<BaseResponse>();

  const onAuthenticate = useCallback(
    (username: string, validate_info: string) => {
      request({
        url: `${AUTH_URL}/otp`,
        method: "POST",
        data: {
          username,
          validate_info,
        },
      });
    },
    [request]
  );

  return {
    isLoading,
    data,
    error,
    onResetAsync,
    onAuthenticate,
  };
};

export const useCheckOTPService = () => {
  const {isLoading, data, error, request, onResetAsync} = useFetch<BaseResponse>();
  const onCheckOTP = useCallback((username: string, otp: number) => {
    request({
      url: `${AUTH_URL}/validate`,
      method: 'POST',
      data: {
        username,
        otp
      }
    })
  }, [request]);
  return {
    isLoading,
    data,
    error,
    onResetAsync,
    onCheckOTP
  }
}