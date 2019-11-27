import React from "react";
import styled from "styled-components";
import Bg from "../assets/images/bg.jpg";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

const MastHeadJumboTron = styled.div`
  &.jumbotron {
    background: url(${Bg}) center no-repeat #000;
    padding-top: 242px;
    padding-bottom: 20px;
    margin-top: -200px;
  }
`;

const MastHeadTitle = styled.h1`
  background: rgba(0, 0, 0, 0.45);
  padding: 50px 20px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  font-size: 50px;

  > .mastHeadTitle1 {
    display: block;
    font-size: 75px;
    line-height: 62px;
  }

  > .mastHeadTitle2 {
    display: block;
    font-size: 108px;
    line-height: 80px;
  }
  > .mastHeadTitle3 {
    display: block;
    font-size: 50px;
  }
`;

const MastHeadInput = styled.input`
  background: rgba(0, 0, 0, 0.45);
  border: none;
  border-bottom: solid #811def;
  width: 100%;
  color: #fff;
  padding: 20px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;

const MastHead = ({ charactersToFilter, observerSearchOnChange }) => (
  <Jumbotron as={MastHeadJumboTron} fluid>
    <Container>
      <MastHeadTitle>
        <span className="mastHeadTitle1">May the</span>
        <span className="mastHeadTitle2">force</span>
        <span className="mastHeadTitle3">be with you</span>
      </MastHeadTitle>
      <MastHeadInput
        placeholder="Filter People"
        onChange={observerSearchOnChange}
      />
    </Container>
  </Jumbotron>
);

export default MastHead;
