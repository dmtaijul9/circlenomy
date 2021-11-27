import React from "react";
import { Row, Col, Input } from "antd";

import "./SignUpForm.css";

const SignUpForm = () => {
  return (
    <section className="sign-up-form">
      <div>
        <h1>Let's Get Started</h1>
        <p>Please provide the following information</p>
      </div>
      <form>
        <Row>
          <Col span={24}>
            <Input placeholder="First Name" size="large" />
          </Col>
          <Col span={24}>
            {" "}
            <Input placeholder="First Name" size="large" />
          </Col>
          <Col span={24}>
            {" "}
            <Input placeholder="First Name" size="large" />
          </Col>
          <Col span={24}>
            {" "}
            <Input placeholder="First Name" size="large" />
          </Col>
          <Col span={24}>
            {" "}
            <Input placeholder="First Name" size="large" />
          </Col>
          <Col span={24}>
            <Row>
              <Col span={12}>
                {" "}
                <Input placeholder="First Name" size="large" />
              </Col>
              <Col span={12}>
                {" "}
                <Input placeholder="First Name" size="large" />
              </Col>
            </Row>
          </Col>
        </Row>
      </form>
    </section>
  );
};

export default SignUpForm;
