import { toast, ToastOptions, UpdateOptions } from "react-toastify";
import { TOAST_ELEMENT_SETTINGS } from "../../../constants/toast";

const ToastNotification = {
  success: (message: string, config?: ToastOptions) => {
    return toast.success(message, {
      ...TOAST_ELEMENT_SETTINGS,
      ...(config || {}),
    });
  },
  error: (message: string, config?: ToastOptions) => {
    return toast.error(message, {
      ...TOAST_ELEMENT_SETTINGS,
      ...(config || {}),
    });
  },
  default: (message: string, config?: ToastOptions) => {
    return toast(message, {
      ...TOAST_ELEMENT_SETTINGS,
      ...(config || {}),
    });
  },
  warning: (message: string, config?: ToastOptions) => {
    return toast.warn(message, {
      ...TOAST_ELEMENT_SETTINGS,
      ...(config || {}),
    });
  },
  info: (message: string, config?: ToastOptions) => {
    const toastId = toast.info(message, {
      ...TOAST_ELEMENT_SETTINGS,
      ...(config || {}),
    });
    return toastId;
  },
  update: (toastId: string, config?: UpdateOptions) =>
    toast.update(toastId, { ...(config || {}) }),
};

export default ToastNotification;
