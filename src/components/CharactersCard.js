import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Loader from "./Loader";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const cardOverride = styled.div`
  &.card {
    background: #131313;
    margin-bottom: 20px;
    border-top: solid #3780dd;
    font-weight: 900;
  }
  .card-body {
    border: 3px solid #fff;
    margin: 15px;
    text-align: center;
    padding: 55px 0;
  }
  .card-text {
    color: #1f9955;
  }
`;

const listGroupOverride = styled.div`
  & .list-group-item {
    background: #000;
    padding: 0 20px;
  }
`;

const CharactersCard = ({ loading, characters }) => {
  return (
    <Container>
      <Row>
        {loading ? (
          <Loader />
        ) : (
          characters.map((character, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <Card as={cardOverride} key={index}>
                <Card.Body>
                  <Card.Title>{character.name}</Card.Title>
                  <Card.Text>{character.birth_year}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default CharactersCard;
