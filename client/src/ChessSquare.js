import React, { Component } from 'react';
import axios from 'axios';

class ChessSquare extends Component {
  constructor(props) {
    super(props);
    this.darkClass = 'dark';
    this.lightClass = 'light';
    console.log(this.props)
    this.x = this.props.x;
    this.y = this.props.y;
    this.position = String.fromCharCode(this.x + 64) + this.y;
    this.selectSquare = this.selectSquare.bind(this);
    this.state = { active: '' }
  }

  render() {
    return <div className={`chessSquare ${this.squareClass(this.x, this.y)} ${this.state.active}`}
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
    if(this.state.highlight) {
      this.setState({ highlight: '' });
    } else {
      const position = this.position;
      axios.post(`http://localhost:8626/knight`, {
        position: this.position
      })
      .then(res => {
        this.setState({ active: res.status === 200 ? 'highlight' : '' });
      })
    }
  }
}

export default ChessSquare;
