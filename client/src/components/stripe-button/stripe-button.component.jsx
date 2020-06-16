import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

import Logo from "../../assets/logo.svg";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publshableKey =
    "pk_test_51GtHLMFslugsn0QIuXaZspSyxXvByadCgd8mRPQ5k9MWMIUAEaSsswVDJNLevd5yemJOlgKNt24NilfWZDgjzc0H00qJpUtIuu";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment Successful!");
      })
      .catch((error) => {
        console.log("Payment error: ", JSON.parse(error));
        alert(
          "Ouch, payment went wrong. Please make sure you use the provided credit card"
        );
      });
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
