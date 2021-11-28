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
          <Col xl={8} lg={{ span: 4, push: 1 }} className="vactor-div">
            <div>
              <img src={signUpVictor} alt="victor" className="sign-up-victor" />
            </div>
          </Col>
          <Col
            xl={{ span: 8, offset: 8, pull: 0 }}
            lg={{ span: 8, pull: 2 }}
            md={{ span: 16, offset: 7 }}
            sm={{ span: 16, offset: 5 }}
            xs={{ span: 20, offset: 2 }}
          >
            <SignUpForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SignUp;
