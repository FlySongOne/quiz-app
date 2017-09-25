import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class User extends Component {
  render() {
    return (
      <div id='user' className="my-quote">
        <div id='userContent'>
        <p>Username: {this.props.user.username}</p>
        <p className="author">Password: {this.props.user.password}</p>
        <p className="genre">Name: {this.props.user.name}</p>
        </div>

      </div>
    );
  };
}

export default User;
