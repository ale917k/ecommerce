import React from "react";
import StripeCheckout from "react-stripe-checkout";

import Logo from "../../assets/logo.svg";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publshableKey =
    "pk_test_51GtHLMFslugsn0QIuXaZspSyxXvByadCgd8mRPQ5k9MWMIUAEaSsswVDJNLevd5yemJOlgKNt24NilfWZDgjzc0H00qJpUtIuu";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Ecommerce Ltd"
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your total is £${price}`}
      currency="GBP"
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publshableKey}
    />
  );
};

export default StripeCheckoutButton;
