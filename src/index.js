import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

const router = (
  <Router>
    <Route exact path="/" component={App} />
  </Router>
);

ReactDOM.render(router, document.getElementById("app"));

module.hot.accept();
