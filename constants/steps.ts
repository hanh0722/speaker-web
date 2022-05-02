import { IconMasterCard, IconVisa } from "../components/core/Icons";
import { SingleMethod } from "../types/components/PaymentCheckout";

export enum STEP_CHECKOUT {
  INFOR_CART, ADDRESS, CHECKOUT
}

export enum PAYMENT_METHODS_VALUE {
  CREDIT_CARD = 'credit_card', CASH = "cash"
}

export enum RADIO_ADDRESS_VALUE {
  HOME = 'Home', OFFICE = 'Office'
}
export const STEP_BREADCRUMB = [
  {
    step: STEP_CHECKOUT.INFOR_CART,
    label: 'Cart'
  },
  {
    step: STEP_CHECKOUT.ADDRESS,
    label: 'Billing & Address'
  },
  {
    step: STEP_CHECKOUT.CHECKOUT,
    label: 'Payment'
  }
]

export const RADIO_ADDRESS = [
  {
    id: RADIO_ADDRESS_VALUE.HOME,
    value: 'Home'
  },
  {
    id: RADIO_ADDRESS_VALUE.OFFICE,
    value: 'Office'
  }
];

export const PAYMENT_OPTIONS: Array<SingleMethod> = [
  {
    title: 'Pay with Credit / Debit card',
    description: 'We support Mastercard, Visa, Discover and Stripe.',
    icons: [
      IconMasterCard,
      IconVisa
    ],
    eventKey: PAYMENT_METHODS_VALUE.CREDIT_CARD
  },
  {
    title: 'Cash on Checkout delivery',
    description: 'Pay with cash when your order is delivered.',
    eventKey: PAYMENT_METHODS_VALUE.CASH
  }
]