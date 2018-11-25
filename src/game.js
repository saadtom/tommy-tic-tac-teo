import React, { Component } from 'react';
import Board from './board';

class Game extends Component {

  handleClick(i) {
    console.log(i);
  }

  render() {
    return (
      <div>
        <Board onClick={(i) => this.handleClick(i)}/>
      </div>
    );
  }
}

export default Game;
