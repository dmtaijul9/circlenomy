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
        <Button type="primary" block className="custom-btn">
          Login
        </Button>
      </form>
      <Divider plain>or</Divider>
    </section>
  );
};

export default SignIn;
