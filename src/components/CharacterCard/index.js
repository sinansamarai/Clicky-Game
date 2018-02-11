import React, { Component } from "react";
import "./character-card.css";

class CharacterCard extends Component {

  render() {
    return (
      <div 
        className="click-item" 
        style={{backgroundImage: `url(${this.props.image})`}} 
        onClick={this.props.handleCharacterSelect}
        id={this.props.id}
      >
      </div>
    );
  }
}

export default CharacterCard;
