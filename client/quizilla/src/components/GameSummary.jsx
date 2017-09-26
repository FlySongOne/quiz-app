import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class GameSummary extends Component {
 render() {
  console.log("THIS PROPSSSSSSS", this.props)
    return (
    <div id='overlay' style={{ display: this.props.displayVal}}>
      <div id='text'>
          <h1>game summary</h1>
          <p>Number correct: {this.props.numberCorrect} </p>
          <button onClick={this.props.changeDisplayVal}>OK</button>
      </div>
    </div>

    );
  };
}

export default GameSummary;
