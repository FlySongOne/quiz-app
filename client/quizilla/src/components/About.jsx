import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div>
       <h3>About Us!</h3>
       <p>  It's the 3 best friends that anybody could have.</p>
       <h3>About Quizilla App</h3>
       <article>
         <p>As a user I want see the login form when I visit home page.</p>
         <p>I want to be able to enter my username and password when I press the login button.</p>
         <p>As a logged in user, I want my information to persist between sessions.</p>
         <p>I want to see the quiz questions one a time.</p>
         <p>I want to see a score output</p>
         <p>The game summary is displayed</p>
       </article>
      </div>
    );
  };
}

export default About;
