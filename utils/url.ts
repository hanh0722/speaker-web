import { FileWithPath } from "react-dropzone";
import { INTERNAL_LINK } from "../constants/link";
import { SUCCESS_CHECKOUT } from "../constants/path";

export const urlIsInternal = (url: string) => {
  try {
    return INTERNAL_LINK.some((value) => url[0] === value);
  } catch (err) {
    return false;
  }
};

export const fileToImage = (file: File | FileWithPath) => {
  return URL.createObjectURL(file);
}

export const redirectSuccessURLTransaction = () => {
  const { protocol, host } = window.location;

  return protocol + '//' + host + '/checkout/success';
};

export const redirectErrorURLTransaction = () => {
  const { protocol, host } = window.location;
  return protocol + '//' + host + '/checkout/error';
};

export const urlRedirectSuccess = (orderId: string) => {
  return `${SUCCESS_CHECKOUT}?order_id=${orderId}`;
}