import { InfoForm } from "../types/components/AddressCheckout";
import { BaseSortRequest } from "../types/request";
import { BASE_URL } from "../utils/config";
import { getCookie } from "../utils/cookies";
import { request } from "./class/auth";

const ADDRESS_URL = `${BASE_URL}/api/address`;
export const getAddress = (params: BaseSortRequest = {}) => {
  return request.get(`${ADDRESS_URL}/get`, {
    headers: {
      authorization: 'Bearer ' + getCookie('token')
    },
    params: {
      ...params
    }
  })
};


export const createAddress = (body: InfoForm) => {
  return request.post(`${ADDRESS_URL}/create`, body, {
    headers: {
      authorization: 'Bearer ' + getCookie('token')
    }
  });
};
