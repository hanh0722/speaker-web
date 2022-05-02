import { Elements } from "@stripe/react-stripe-js";
import PropTypes from "prop-types";
import { Stripe, StripeElementsOptions } from "@stripe/stripe-js";
import { FC } from "react";

interface StripeWrapperProps {
  stripe: Stripe | null | Promise<Stripe | null>;
  options?: StripeElementsOptions;
  keySecret?: string
}

const StripeWrapper: FC<StripeWrapperProps> = (props) => {
  const { stripe, options = {}, children, keySecret } = props;
  return (
    <>
      {keySecret ?
        <Elements stripe={stripe} options={{clientSecret: keySecret}}>
          {children}
        </Elements>
       : (
        children
      )}
    </>
  );
};

StripeWrapper.defaultProps = {
  options: {},
};

StripeWrapper.propTypes = {
  stripe: PropTypes.any.isRequired,
  options: PropTypes.any,
};

export default StripeWrapper;
