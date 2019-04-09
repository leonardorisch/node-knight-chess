import React, { Component } from 'react';
import './App.css';
import ChessSquare from './ChessSquare.js';

class Chess extends Component {
  render() {
    return (
      <div className="chessTable">
        {this.squareElements()}
      </div>
    );
  }

  squareElements() {
    const squares = []
    for(let x = 1; x < 9; x++) {
      for(let y = 1; y < 9; y++) {
        squares.push(<ChessSquare x={x} y={y} key={x.toString() + y.toString()} />)
      }
    }
    return squares
  }
}

export default Chess;
