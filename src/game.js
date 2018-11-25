import React, { Component } from 'react';
import Board from './board';

class Game extends Component {

  handleClick() {
    console.log(444);
  }

  render() {
    return (
      <div>
        <Board onClick={() => this.handleClick()}/>
      </div>
    );
  }
}

export default Game;
