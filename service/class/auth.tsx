import axios from "axios";
import { UserResponse } from "../../types/request";
import { BASE_URL } from "../../utils/config";
import { getCookie } from "../../utils/cookies";
import { isClient } from "../../utils/server";

export const request = axios.create({
  url: BASE_URL,
  headers: {
    authorization: isClient() && getCookie('token') ? `Bearer ${getCookie('jwt')}` : ''
  }
});

const onLogin = <T extends UserResponse>(
  username?: string,
  password?: string,
  token?: string
) => {
  return request.post<T>(
    `${BASE_URL}/api/auth/login`,
    {
      username,
      password,
    },
    {
      headers: {
        authorization: "Bearer " + (token || ""),
      },
    }
  );
};

export { onLogin };
