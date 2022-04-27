import { ElementType } from "react";
import { IconList, IconOLList } from "../components/core/Icons";
import IconEdit from "../components/core/Icons/IconEdit";

export const HOME = '/';
export const SHOP = '/collections';
export const PRODUCTS = '/products';
export const BLOGS = '/blogs';
export const FEATURES = '/features';
export const LOGIN = '/login';
export const WISHLIST = '/wishlist';
export const CART = '/cart';
export const REGISTER = '/register';
export const PRODUCT = '/products';
export const VALIDATE_AFTER_REGISTER = '/validate';
export const FORGET_PASSWORD = '/forget-password';
export const VALIDATE_OTP = '/validate-otp';

export const ROUTE_ACTIVE_TRANSITION = ['/register'];

export const DASH_BOARD = '/dashboard';
export const DASH_BOARD_PRODUCTS = '/dashboard/products';
export const CREATE_PRODUCT = '/dashboard/products/create';
export const MANAGE_PRODUCT = `${DASH_BOARD}/products/manage`;


interface ManagementDashboard {
  href: string,
  title: string,
  icon: ElementType
}
export const MANAGEMENT: Array<ManagementDashboard> = [
  {
    href: CREATE_PRODUCT,
    title: 'Create',
    icon: IconEdit
  },
  {
    href: MANAGE_PRODUCT,
    title: 'List Products',
    icon: IconOLList
  }
]

export const EDIT_PRODUCT = (id: string) => `${DASH_BOARD}/products/edit/${id}`;