import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class GameSummary extends Component {

 render() {
    return (

    <div id='summary'>
      <p>game summary</p>
        {this.props.numberCorrect}
    </div>

    );
  };
}

export default GameSummary;
