import { KEY_UPLOAD } from "../constants/type";
import { BASE_URL } from "../utils/config";
import { getCookie } from "../utils/cookies";
import { request } from "./class/auth";
import { FileResponse } from '../types/request';

const UPLOAD_URL = `${BASE_URL}/api/file`;

export const uploadFile = (file: Array<File>) => {
  const formData = new FormData();
  file.forEach(item => {
    formData.append(KEY_UPLOAD, item);
  });

  return request.post<FileResponse>(`${UPLOAD_URL}/upload`, formData, {
    headers: {
      authorization: 'Bearer ' + getCookie('token')
    }
  });
}