import React from "react";
import { Row, Col, Input, Form, Checkbox, Button } from "antd";

import "./SignUpForm.css";

const SignUpForm = () => {
  return (
    <section className="sign-up-form">
      <div>
        <h1>Let's Get Started</h1>
        <p>Please provide the following information</p>
      </div>
      <form>
        <Row gutter={[0, 16]}>
          <Col span={24}>
            <Input placeholder="First Name" size="large" />
          </Col>
          <Col span={24}>
            {" "}
            <Input placeholder="Last Name" size="large" />
          </Col>
          <Col span={24}>
            {" "}
            <Input placeholder="Email" size="large" />
          </Col>
          <Col span={24}>
            {" "}
            <Input placeholder="Date of birth" size="large" />
          </Col>
          <Col span={24}>
            {" "}
            <Input placeholder="Phone Number" size="large" />
          </Col>
          <Col span={24}>
            <Row gutter={[16]}>
              <Col span={12}>
                {" "}
                <Input.Password placeholder="Password" size="large" />
              </Col>
              <Col span={12}>
                {" "}
                <Input.Password placeholder="Confirm password" size="large" />
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Form.Item>
              <Checkbox>
                I agree with ciclenomy's <a href="./">terms</a> &{" "}
                <a href="./">conditions</a>
              </Checkbox>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Button type="primary" shape="round" className="sign-up-form-btn">
              Sign Up
            </Button>
          </Col>
          <Col span={24}>
            <a href="./">Already Sign up? Login now</a>
          </Col>
        </Row>
      </form>
    </section>
  );
};

export default SignUpForm;
