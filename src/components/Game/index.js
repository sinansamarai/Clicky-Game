import React, { Component } from "react";
import Navbar from '../Navbar/';
import Jumbotron from '../Jumbotron/';
import CharacterCard from '../CharacterCard/';
import characters from './characters.json';
import './game.css';

class Game extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    score: 0, 
    topScore: 0,
    message: 'Click an image to start!',
    chosenCharacters: [],
    characters
  };

  componentDidMount() {
    this.setState({
      characters: this.shuffleCharactersArray(this.state.characters)
    })
  }

  shuffleCharactersArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  handleCharacterSelect = (event) => {
    const selectedCharacterId = event.currentTarget.id;
    let latestScore = this.state.score;

    if (this.state.chosenCharacters.indexOf(selectedCharacterId) === -1 ) {
      latestScore++;
      if (latestScore > this.state.topScore) {
        this.setState({
          topScore: latestScore
        })
      }

      this.setState({ 
        chosenCharacters: this.state.chosenCharacters.concat([selectedCharacterId]),
        characters: this.shuffleCharactersArray(this.state.characters),
        score: latestScore,
        message: 'You guessed correctly!'
      })
    }
    else {
      this.setState({ 
        score: 0,
        message: 'You guessed incorrectly!',
        chosenCharacters: [],
        characters: this.shuffleCharactersArray(this.state.characters)      
      })
    }
  }

  render() {
    return (
      <div>
        <Navbar message={this.state.message} score={this.state.score} topScore={this.state.topScore}/>
        <Jumbotron />
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-10">
              {this.state.characters.map(character => {
                return <CharacterCard
                  id={character.id}
                  key={character.id}
                  image={character.image}
                  handleCharacterSelect={this.handleCharacterSelect}
                />
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
