import React from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import "./GridLayout.css";

export const GridLayout = () => {
  return (
    <div>
      <Container>
        <Form>
          <Row>
            <Col>
              <Form.Control type="text" placeholder="First Name" />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Last Name" />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Full Name" />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Control type="text" placeholder="Phone Number" />
            </Col>
            <Col>
              <Form.Control type="email" placeholder="Email" />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Control type="text" placeholder="Current Address" />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Permanent Address" />
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};
