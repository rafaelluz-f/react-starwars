import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Logo from "../assets/images/logo.svg";
import MenuBar from "../assets/images/menu-bar.svg";
import Swapi from "./Swapi";

const NavBarStyle = styled.nav`
  border-top: 3px solid #feee00;
  padding: 20px 0 !important;
  background: rgba(0, 0, 0, 0.45);

  .logo {
    text-align: center;
    img {
      max-width: 300px;
    }
  }
`;

const ToggleStyle = styled.button`
  border: none !important;
  &:focus {
    outline: none;
  }
  span {
    background: url(${MenuBar}) !important;
  }
`;

const NavStyle = styled.div`
  a {
    padding-left: 14px !important;
    color: #fff !important;
    &:hover {
      color: red !important;
    }
  }
`;

const LogoStyle = styled.a`
  width: 100%;
`;

const NavApp = () => (
  <>
    <Navbar as={NavBarStyle} expand="xs">
      <Container>
        <Col xs={2} sm={2}>
          <Navbar.Toggle as={ToggleStyle} aria-controls="basic-navbar-nav" />
        </Col>
        <Col xs={6} sm={8}>
          <div className="logo">
            <Navbar.Brand as={LogoStyle} href="#home">
              <img alt="Star Wars Logo" src={Logo} />
            </Navbar.Brand>
          </div>
        </Col>
        <Col xs={4} sm={2}>
          <Swapi />
        </Col>
        <Col xs={12}>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav as={NavStyle} className="mr-auto">
              <Nav.Link href="https://github.com/rafaelfigueiredo-l">
                Developed by: Rafael Figueiredo
              </Nav.Link>
              <Nav.Link href="https://github.com/rafaelfigueiredo-l/react-starwars">
                https://github.com/rafaelfigueiredo-l/react-starwars
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Container>
    </Navbar>
  </>
);

export default NavApp;
