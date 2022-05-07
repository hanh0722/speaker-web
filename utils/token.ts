import { getCookie } from "./cookies"

export const getTokenFromCookie = (name: string) => {
  return getCookie(name);
};

export const authorizationRequest = () => {
  return {
    authorization: 'Bearer ' + getTokenFromCookie('token')
  }
};

