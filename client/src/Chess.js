import React, { Component } from "react";
import "./App.css";
import ChessSquare from "./ChessSquare.js";

class Chess extends Component {
  constructor(props) {
    super(props);
    this.state = { active: "", firstMovements: [], secondMovements: [] };
    this.selectSquare = this.selectSquare.bind(this);
    this.highlightClass = this.highlightClass.bind(this);
    this.mount = this.mount.bind(this);
  }

  selectSquare(field, firstMovements, secondMovements) {
    this.setState({
      active: field,
      firstMovements: firstMovements,
      secondMovements: secondMovements
    });
  }

  render() {
    return <div className="chessTable">{this.squareElements()}</div>;
  }

  squareElements() {
    const squares = [];
    for (let x = 1; x < 9; x++) {
      for (let y = 1; y < 9; y++) {
        const position = String.fromCharCode(x + 64) + y;
        squares.push(this.mount(x, y, position));
      }
    }
    return squares;
  }

  highlightClass(position) {
    if (this.state.active === position) {
      return "highlight";
    } else if (this.state.firstMovements.includes(position)) {
      return "first-movements";
    } else if (this.state.secondMovements.includes(position)) {
      return "second-movements";
    }
  }

  mount(x, y, position) {
    return (
      <div
        key={x.toString() + y.toString()}
        className={this.highlightClass(position)}
      >
        <ChessSquare
          x={x}
          y={y}
          key={x.toString() + y.toString()}
          onActiveSquare={this.selectSquare}
          position={position}
        />
      </div>
    );
  }
}

export default Chess;
