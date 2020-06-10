import React, { useState } from "react";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-in.styles.scss";

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(user.email, user.password);
      setUser({
        email: "",
        password: "",
      });
    } catch (err) {
      console.log(err);
    }
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
            onClick={signInWithGoogle}
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

export default SignIn;
