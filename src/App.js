import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import customCss from './assets/css/custom.css';
import Header from './components/Header';

export default class App extends React.Component {
    state = {
        peoples: []
    };

    componentDidMount() {
        axios.get(`https://swapi.co/api/people`).then(res => {
            const peoples = res.data.results;
            this.setState({ peoples });
            console.log(peoples);
        });
    }

    render() {
        const Button = styled.button`
            cursor: pointer;
            background: transparent;
            font-size: 16px;
            border-radius: 3px;
            color: palevioletred;
            border: 2px solid palevioletred;
            margin: 0 1em;
            padding: 0.25em 1em;
            transition: 0.5s all ease-out;
            &:hover {
                background-color: palevioletred;
                color: white;
            }
        `;
        const { peoples } = this.state;
        return (
            <div>
                <Header />
                <h1>HELLO RAFAEL BOILERPLATE REACT</h1>
                {peoples.map(people => (
                    <li>{people.name}</li>
                ))}
                <Button variant="danger">Teste</Button>
            </div>
        );
    }
}
