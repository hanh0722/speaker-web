import { BASE_URL } from "../utils/config";
import { getCookie } from "../utils/cookies";
import { request } from "./class/auth";

export const sendMessage = (message: string, room: string) => {
  return request.post<{message: string, room: string}>(`${BASE_URL}/api/chat/create`, {
    message: message,
    room: room
  }, {
    headers: {
      authorization: 'Bearer ' + getCookie('token')
    }
  })
};