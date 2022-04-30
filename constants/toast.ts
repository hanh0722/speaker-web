import { ToastContainerProps, ToastOptions } from "react-toastify";
import { isMobile } from "../utils/string";
export const TOP_RIGHT = "top-right";
export const TOP_LEFT = "top-left";
export const TOP_CENTER = "top-center";
export const BOTTOM_LEFT = "bottom-left";
export const BOTTOM_RIGHT = "bottom-right";
export const BOTTOM_CENTER = "bottom-center";

export const POSITION_TOAST = {
  [TOP_RIGHT]: TOP_RIGHT,
  [TOP_LEFT]: TOP_LEFT,
  [TOP_CENTER]: TOP_CENTER,
  [BOTTOM_LEFT]: BOTTOM_LEFT,
  [BOTTOM_CENTER]: BOTTOM_CENTER,
  [BOTTOM_RIGHT]: BOTTOM_RIGHT,
};

export const DEFAULT_SETTINGS: ToastContainerProps = {
  position: isMobile() ? TOP_CENTER : TOP_RIGHT,
  autoClose: 3000,
  hideProgressBar: false,
  newestOnTop: true,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
  limit: 5,
};

export const TOAST_ELEMENT_SETTINGS: ToastOptions = {
  position: isMobile() ? TOP_CENTER : TOP_RIGHT,
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};
