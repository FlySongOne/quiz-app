import React, { Component } from 'react';
import AboutImg from './aboutImg.png';

class About extends Component {
  render() {
    return (
      <div id='about'>
       <p>About Us!</p>
       <article>
       It's the 3 best friends that anybody could have
       <p>Each one with a unqiue coding power!</p>
       <img src={AboutImg} className="aboutImage" alt="About Image" />
       </article>
      </div>
    );
  };
}

export default About;
