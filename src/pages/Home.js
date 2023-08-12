import React from "react";
import { Carousel, Col, Container, Row, Image } from "react-bootstrap";
import "../css/Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0600/0672/7879/files/Banner__1.jpg?v=1689410796"
            alt="Second slide"
          />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0600/0672/7879/files/Rakhi_3.jpg?v=1691229473"
            alt="Third slide"
          />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>

      <Container className="product">
        <Row>
          <Col xs={6} md={3} className="column01">
            <Image
              src="./img/kurtiimg/301.jpg"
              width={"auto"}
              height={"300px"}
              style={{ marginTop: "25px" }}
              rounded
            />
            <h4>Nevi Blue Thea Designer Women's Kurti</h4>
          </Col>
          <Col xs={6} md={3} className="column01">
            <Image
              src="./img/kurtiimg/302.jpg"
              width={"auto"}
              height={"300px"}
              style={{ marginTop: "25px" }}
              rounded
            />
            <h4>Dark Blue Printed GEORGETTE STITCHED KURTI</h4>
          </Col>
          <Col xs={6} md={3} className="column01">
            <Image
              src="./img/kurtiimg/303.jpg"
              width={"auto"}
              height={"300px"}
              style={{ marginTop: "25px" }}
              rounded
            />
            <h4>Fashion SAY Kurti Designer Anarkali Kurti with Dupatta Set</h4>
          </Col>
        </Row>
      </Container>
      <Product/>
    </>
  );
};

export default Home;
