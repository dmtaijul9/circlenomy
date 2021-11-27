import React, { useRef, useState } from "react";
import circlenomyHeadline from "../img/CIRCLENOMY.png";
import googleLogo from "../img/google.png";
import { Input, Button, Divider, Form } from "antd";
import "./SignIn.css";

const SignIn = (props) => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const setEmailHandler = (e) => {
    setEmailInput(e.target.value);
  };
  const setPasswordHandler = (e) => {
    setPasswordInput(e.target.value);
  };

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    console.log({ emailInput, passwordInput });
  };

  return (
    <section className="login-ui-box">
      <div className="login-headline">
        <img src={circlenomyHeadline} alt="circlenomy" />
      </div>
      <form className="login-input-form" onSubmit={loginSubmitHandler}>
        <Form.Item>
          <Input
            placeholder="Email or mobile number"
            value={emailInput}
            onChange={setEmailHandler}
          />
        </Form.Item>
        <Form.Item>
          <Input.Password
            placeholder="Password"
            onChange={setPasswordHandler}
          />
        </Form.Item>
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
