import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "../css/About.css";

const About = () => {
  return (
    <Container className="about">
      <Row>
        <Col>
          <Card style={{ width: "14rem" }}>
            <Image src="holder.js/171x180" roundedCircle />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
