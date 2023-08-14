import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "../css/Layout.css";
import Footer from '../pages/Footer.js'

const Layout = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navbar">
        <Container>
          <Navbar.Brand href="#home" className="logo">
            <img width={"85px"} src="./img/logo.png" alt="modelled-dress" />
            {/* <p>Jaipur Creation</p> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="navbtn">
              <Link to="/">Home</Link>
              <Link to="/product">Our Product</Link>
              {/* <Link to="/about">About Us</Link> */}
              <Link to="/contact">Contact Us</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
      <Footer/>
    </>
  );
};

export default Layout;
