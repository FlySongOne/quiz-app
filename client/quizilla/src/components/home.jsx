import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import homeImage from './homeImg.png';

class Home extends Component {

 render() {
    return (

    <div id='home'>
      <p>Welcome to My Quizzilla!</p>
      <img src={homeImage} className="homeMeme" alt="Home Image" />
    </div>

    );
  };
}

export default Home;
