import React from "react";
import styled from "styled-components";

const Center = styled.p`
  text-align: center;
`;

const SwapiButton = styled.a`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: #fff !important;
  border: 1px solid #fff;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;

const Swapi = () => (
  <React.Fragment>
    <SwapiButton>Swapi.co Powered</SwapiButton>
  </React.Fragment>
);

export default Swapi;
