import { CountryResponse } from "../types/request";
import { BASE_URL } from "../utils/config"
import { request } from "./class/auth"

const COUNTRY_URI = `${BASE_URL}/api/country`;

export const getAllCountries = () => {
  return request.get<CountryResponse>(`${COUNTRY_URI}/get`);
}