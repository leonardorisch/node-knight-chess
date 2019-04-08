import React, { Component } from 'react';
import './App.css';

class Chess extends Component {
  constructor(props) {
    super(props);
    this.darkClass = 'dark';
    this.lightClass = 'light';
  }

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
        squares.push(
          <div className={"chessSquare " + this.squareClass(x, y)}
               key={x.toString() + y.toString()}> </div>
        )
      }
    }
    return squares
  }

  squareClass(x, y) {
    const odd = x % 2;

    if (y % 2) {
      return odd ? this.lightClass : this.darkClass
    }

    return odd ? this.darkClass : this.lightClass
  }
}

export default Chess;
