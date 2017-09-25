import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class GameSummary extends Component {

 render() {
    return (
    <div id='overlay'>
      <p id='text'>game summary {this.props.numberCorrect}</p>
    </div>

    );
  };
}

export default GameSummary;
