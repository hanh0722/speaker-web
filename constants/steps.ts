export enum STEP_CHECKOUT {
  INFOR_CART, ADDRESS, CHECKOUT
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