import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/quizzes">Quizzes</Link></li>
            <li><Link to='/users'>Users</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </div>
    );
  };
}

export default Nav;
