import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
        </div>
    </Router>
);

ReactDOM.render(router, document.getElementById('app'));

module.hot.accept();
