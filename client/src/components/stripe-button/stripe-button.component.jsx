import React from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

import { paymentSuccess } from "../../redux/user/user.actions";

const StripeCheckoutButton = ({ price, paymentSuccess }) => {
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
        paymentSuccess();
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
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is £${price}`}
      currency="GBP"
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publshableKey}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  paymentSuccess: () => dispatch(paymentSuccess()),
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
