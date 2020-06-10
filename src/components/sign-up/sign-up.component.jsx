import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

const SignUp = () => {
  const [user, setUser] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { newUser } = await auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );

      createUserProfileDocument(newUser, "test");

      setUser({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
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
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={user.displayName}
          handleChange={handleChange}
          label="Display Name"
          required
        />

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

        <FormInput
          type="password"
          name="confirmPassword"
          value={user.confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
          required
        />

        <CustomButton type="submit" value="Submit Form">
          Sign Up
        </CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
