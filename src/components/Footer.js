import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styled from "styled-components";

const Foot = styled.div`
  p {
    text-align: center;
  }
  a {
    color: #fff;
  }
`;

const Footer = () => (
  <footer>
    <Foot>
      <Container>
        <Row>
          <Col>
            <p>
              <a href="https://github.com/rafaelfigueiredo-l">
                Developed by: Rafael Figueiredo
              </a>
            </p>
            <p>
              <a href="https://github.com/rafaelfigueiredo-l/react-starwars">
                https://github.com/rafaelfigueiredo-l/react-starwars
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </Foot>
  </footer>
);

export default Footer;
