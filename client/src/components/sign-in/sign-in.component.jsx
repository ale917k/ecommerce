import React, { useState } from "react";
import { connect } from "react-redux";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-in.styles.scss";

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart(user.email, user.password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={user.email}
          handleChange={handleChange}
          label="Email"
          required
        />

        <FormInput
          type="password"
          name="password"
          value={user.password}
          handleChange={handleChange}
          label="Password"
          required
        />

        <div className="buttons">
          <CustomButton type="submit" value="Submit Form">
            Sign In
          </CustomButton>

          <CustomButton
            type="button"
            onClick={googleSignInStart}
            value="Submit Form"
            isGoogleSignIn
          >
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
