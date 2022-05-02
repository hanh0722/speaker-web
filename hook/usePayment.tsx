import { useStripe, useElements } from '@stripe/react-stripe-js'

const usePayment = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmitPayment = () => {
    if (!stripe || !elements) {
      return;
    };
    console.log(stripe, elements);
  };

  return {
    handleSubmitPayment
  };
};

export default usePayment;

