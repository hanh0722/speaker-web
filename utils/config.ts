import getConfig from "next/config";

export const { publicRuntimeConfig } = getConfig();

export const BASE_URL = publicRuntimeConfig['BASE_URL'];