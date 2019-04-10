import React, { Component } from 'react';
import axios from 'axios';

class ChessSquare extends Component {
  constructor(props) {
    super(props);
    this.darkClass = 'dark';
    this.lightClass = 'light';
    this.className = this.props.className;
    this.x = this.props.x;
    this.y = this.props.y;
    this.position = this.props.position;
    this.selectSquare = this.selectSquare.bind(this);
  }

  render() {
    return <div className={`chessSquare ${this.squareClass(this.x, this.y)}`}
      onClick={this.selectSquare}>
    </div>
  }

  squareClass() {
    const odd = this.x % 2;

    if (this.y % 2) {
      return odd ? this.lightClass : this.darkClass;
    }

    return odd ? this.darkClass : this.lightClass;
  }

  selectSquare() {
    axios.post(`http://localhost:8626/knight`, {
      position: this.position
    })
    .then(res => {
      const position = res.status === 200 ? this.position : '';
    })

    this.props.onActiveSquare(this.position);
  }
}

export default ChessSquare;
