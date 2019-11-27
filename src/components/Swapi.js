import React from "react";
import styled from "styled-components";

const SwapiPowered = styled.p`
  text-align: center;
  margin: 0;
  cursor: pointer;
  font-size: 13px;
  border-radius: 50px;
  color: #fff !important;
  border: 1px dashed #fff;
  padding: 5px 8px;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: var(--yellow);
    text-decoration: none;
    color: white;
    border: none;
  }

  & > a {
    color: #fff;
  }
  & > a:hover {
    text-decoration: none;
    color: #fff;
  }
`;

const Swapi = () => (
  <SwapiPowered>
    <a href="https://swapi.co/">Swapi.co Powered</a>
  </SwapiPowered>
);

export default Swapi;
