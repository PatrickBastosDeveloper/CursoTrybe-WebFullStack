import React, { Component } from 'react';
import Card from '../components/Card';
import { readLocalStorage, saveLocalStorage } from '../utils/localStorage';

class FavoriteCharacters extends Component {
  state = {
    favoriteChars: [],
  }

  componentDidMount() {
    // console.log("MONTOU TELA DE FAVORITOS");
    const favoriteChars = readLocalStorage("favoriteChar");
    this.setState({ favoriteChars });
  }

  handleClick = (char) => {
    const myListChar = readLocalStorage("favoriteChar");

    if (myListChar) {
      const listeFiltered = myListChar
        .filter((charFav) => charFav.id !== char.id);

      saveLocalStorage("favoriteChar", listeFiltered);
      this.setState({ favoriteChars: listeFiltered })
    }
  }

  render() {
    const { favoriteChars } = this.state;

    return (
      <section>
        {
          favoriteChars.map((char) => (
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

export default FavoriteCharacters;
