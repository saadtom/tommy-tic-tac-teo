import React, { Component } from 'react';
import Square from './square';

class Board extends Component {
  createBoard(row, col) {
    const board = [];
    let cellCounter = 0;

    for (let i = 0; i < row; i += 1) {
      const columns = [];
      for (let j = 0; j < col; j += 1) {
        columns.push(this.renderSquare(cellCounter++));
      }
      board.push(<div key={i} className="board-row">{columns}</div>);
    }

    return board;
  }

  renderSquare(i) {
    const winnerClass =
      this.props.winnerSquares &&
      (this.props.winnerSquares[0] === i ||
        this.props.winnerSquares[1] === i ||
        this.props.winnerSquares[2] === i)
        ? 'square--green'
        : '';

    return (
      <Square
        winnerClass={winnerClass}
        key={i}
        onClick={(i) => this.props.onClick(i)}
      />
    );
  }

  render() {
    return <div>{this.createBoard(3, 3)}</div>;
  }
}

export default Board;
