import React, { Component } from 'react';
import Square from './square';

class Game extends Component {
  render() {
    return (
      <div>
        <p>Game board</p>
        <p>is ready to use</p>
        <Square />
      </div>
    );
  }
}

export default Game;
