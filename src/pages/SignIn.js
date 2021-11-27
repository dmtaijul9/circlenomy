import React from "react";
import circlenomyHeadline from "../img/CIRCLENOMY.png";
import { Input, Button, Divider } from "antd";
import "./SignIn.css";

const SignIn = () => {
  return (
    <section className="login-ui-box">
      <div className="login-headline">
        <img src={circlenomyHeadline} alt="circlenomy" />
      </div>
      <form action="" className="login-input-form">
        <Input placeholder="Email or mobile number" />
        <Input placeholder="Email or mobile number" />
        <Button block className="custom-btn">
          Login
        </Button>
      </form>
      <Divider plain>or</Divider>
      <div className="optional-login">
        <Button block className="custom-btn">
          Sign Up
        </Button>
        <Button block className="custom-btn">
          <img src="" alt="" />
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
