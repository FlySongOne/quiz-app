import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class User extends Component {
  render() {
    return (
      <div className="my-quote">
        <h3>{this.props.user.username}</h3>
        <span className="author">{this.props.user.password}</span>
        <span className="genre">{this.props.user.name}</span>

      </div>
    );
  };
}

export default User;
