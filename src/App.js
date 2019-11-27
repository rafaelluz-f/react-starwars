import React from "react";
import axios from "axios";
import { createGlobalStyle } from "styled-components";
import NavApp from "./components/NavApp";
import MastHead from "./components/MastHead";
import CharactersCard from "./components/CharactersCard";
import Footer from "./components/Footer";

const GlobalStyle = createGlobalStyle`
  html body {
    background:#000;
    color:#fff;
  }
`;

export default class App extends React.Component {
  state = {
    loading: true,
    characters: [],
    filterCharacters: "",
  };

  componentDidMount() {
    axios
      .all([
        axios.get("https://swapi.co/api/people/?page=1"),
        axios.get("https://swapi.co/api/people/?page=2"),
        axios.get("https://swapi.co/api/people/?page=3"),
        axios.get("https://swapi.co/api/people/?page=4"),
        axios.get("https://swapi.co/api/people/?page=5"),
        axios.get("https://swapi.co/api/people/?page=6"),
        axios.get("https://swapi.co/api/people/?page=7"),
        axios.get("https://swapi.co/api/people/?page=8"),
        axios.get("https://swapi.co/api/people/?page=9"),
      ])
      .then((res) => {
        const allCharacters = res.reduce(
          (reduceStore, item) => reduceStore.concat(item.data.results),
          []
        );
        this.setState({
          loading: false,
          characters: allCharacters,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  observerSearchOnChange = () => {
    this.setState({
      filterCharacters: event.target.value,
    });
  };

  render() {
    const { characters, loading, filterCharacters } = this.state;
    const filteredCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(filterCharacters)
    );
    return (
      <>
        <GlobalStyle />
        <header>
          <NavApp />
          <MastHead
            charactersToFilter={characters}
            observerSearchOnChange={this.observerSearchOnChange}
          />
        </header>
        <main>
          <CharactersCard loading={loading} characters={filteredCharacters} />
        </main>
        <Footer />
      </>
    );
  }
}
