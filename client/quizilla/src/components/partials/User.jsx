import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class User extends Component {
  constructor(props) {
    super(props)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  handleItemDelete() {
    const id = this.props.user.id;
    this.props.handleItemDelete(id)
  }
  render() {
    return (
      <div className="my-quote">
        <h3>{this.props.user.username}</h3>
        <span className="author">{this.props.user.password}</span>
        <span className="genre">{this.props.user.name}</span>
        <button onClick={this.handleItemDelete}>Delete</button>
      </div>
    );
  };
}

export default User;
