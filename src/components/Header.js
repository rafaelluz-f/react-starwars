import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Logo from "../assets/images/logo.svg";
import MenuBar from "../assets/images/menu-bar.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Swapi from "./Swapi";
import styled from "styled-components";

const NavBarStyle = styled.nav`
  border-top: 3px solid #feee00;
  padding: 20px 0 !important;
  background: #000;
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
  width: 300px;
`;

const Header = () => (
  <React.Fragment>
    <Navbar as={NavBarStyle} expand="xs">
      <Container>
        <Col>
          <Navbar.Toggle as={ToggleStyle} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav as={NavStyle} className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Col>
        <Col>
          <Navbar.Brand as={LogoStyle} href="#home">
            <img src={Logo} />
          </Navbar.Brand>
        </Col>
        <Col>
          <Swapi />
        </Col>
      </Container>
    </Navbar>
  </React.Fragment>
);

export default Header;
