import { onLogin } from "../service/class/auth";
import { UserResponse } from "../types/request";
import { setCookie } from "./cookies";

export const onLoginUser = async (username: string, password: string) => {
  return new Promise(async (resolve, reject) => {
    try{
      const response = await onLogin<UserResponse>(username, password);
      if (response.data?.user && response.data?.token) {
        resolve(response.data);
        setCookie("token", response?.data?.token, 1);
        localStorage.setItem('expirationTime', response?.data?.exp_time?.toString());
      }
    }catch(err: any) {
      reject(err.response.data?.message || "Server internal error");
    }
  })
};
