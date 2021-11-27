import React, { useRef, useState } from "react";
import circlenomyHeadline from "../img/CIRCLENOMY.png";
import googleLogo from "../img/google.png";
import { Input, Button, Divider } from "antd";
import "./SignIn.css";

const SignIn = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const inputEmail = useRef(null);
  const inputPassword = useRef(null);

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    console.log("hello");
  };

  return (
    <section className="login-ui-box">
      <div className="login-headline">
        <img src={circlenomyHeadline} alt="circlenomy" />
      </div>
      <form className="login-input-form" onSubmit={loginSubmitHandler}>
        <Input placeholder="Email or mobile number" />
        <Input.Password placeholder="Password" />
        <Button block className="custom-btn" htmlType="submit">
          Login
        </Button>
      </form>
      <Divider plain>or</Divider>
      <div className="optional-login">
        <Button block className="custom-btn">
          Sign Up
        </Button>
        <Button block className="custom-btn google-login-btn">
          <img src={googleLogo} alt="google-logo" />
          <span>Continue with Google</span>
        </Button>
        <a href="./" className="forgot-pass-btn">
          <span>Forgot password?</span>
        </a>
      </div>
    </section>
  );
};

export default SignIn;
