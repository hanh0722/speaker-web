import { IconFacebook, IconGoogle, IconInstagram } from "../components/core/Icons";
import { PRODUCT } from "./path";

export const INTERNAL_LINK = ['.', '/'];

export const SOCIAL = [
  {
    icon: IconGoogle,
    href: '/'
  },
  {
    icon: IconFacebook,
    href: '/'
  },
  {
    icon: IconInstagram,
    href: '/'
  }
]

export const PRODUCT_DETAIL = (id: string) => `${PRODUCT}/${id}`;