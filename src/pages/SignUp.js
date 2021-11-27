import React from "react";
import { Row, Col } from "antd";
import signUpVictor from "../img/3969449.png";
import Container from "../components/Container";

import "./SignUp.css";
import SignUpForm from "../components/SignUpForm";

function SignUp() {
  return (
    <section className="sign-up-section">
      <Container>
        <Row justify="space-between" gutter={16} wrap>
          <Col span={8} className="vactor-div">
            <div>
              <img src={signUpVictor} alt="victor" className="sign-up-victor" />
            </div>
          </Col>
          <Col span={8} offset={8}>
            <SignUpForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SignUp;
