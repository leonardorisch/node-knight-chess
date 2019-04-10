import React, { Component } from 'react';
import './App.css';
import ChessSquare from './ChessSquare.js';

class Chess extends Component {
  constructor(props) {
    super(props)
    this.state = { active: '' };
    this.selectSquare = this.selectSquare.bind(this);
    this.highlightClass = this.highlightClass.bind(this);
    this.mount = this.mount.bind(this);
  }

  selectSquare(field) {
    this.setState({ active: field })
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
        const position = String.fromCharCode(x + 64) + y;
        squares.push(this.mount(x, y, position))
      }
    }
    return squares
  }

  highlightClass(position) {
    return this.state['active'] === position ? 'highlight' : ''
  }

  mount(x, y, position) {
    return (
      <div key={x.toString() + y.toString()} className={this.highlightClass(position)}>
        <ChessSquare x={x} y={y}
                     key={x.toString() + y.toString()}
                     onActiveSquare={this.selectSquare}
                     position={position}
        />
      </div>
    )
  }
}

export default Chess;
