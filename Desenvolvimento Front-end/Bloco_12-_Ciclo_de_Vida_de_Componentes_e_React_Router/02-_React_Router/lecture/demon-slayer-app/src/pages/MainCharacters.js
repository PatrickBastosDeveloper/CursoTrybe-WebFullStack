import React, { Component } from 'react';
import requestApi from '../services/requestApi'
import data from '../services/data';
import Card from '../components/Card';
import Loading from '../components/Loading';
import { saveLocalStorage, readLocalStorage } from '../utils/localStorage';

class MainCharacters extends Component {
  state = {
    charactersList: [],
    isLoading: false,
  }

  componentDidMount() {
    this.getCharacters();
  }

  getCharacters = async () => {
    this.setState({ isLoading: true });
    const response = await requestApi(data);
    // console.log(response);
    this.setState({ charactersList: response, isLoading: false });
  }

  handleClick = (char) => {
    const myListChar = readLocalStorage("favoriteChar");

    if (!myListChar) {
      saveLocalStorage("favoriteChar", [char]);
    } else {
      saveLocalStorage("favoriteChar", [ ...myListChar, char ]);
    }
  }

  render() {
    const { charactersList } = this.state;

    if (!charactersList.length) return <Loading />

    return (
      <section>
        {
          charactersList.map((char) => (
            <Card
              key={char.id}
              infos={char}
              onClick={ () => this.handleClick(char) }
            />
          ))
        }
      </section>
    )
  }
}

export default MainCharacters;
