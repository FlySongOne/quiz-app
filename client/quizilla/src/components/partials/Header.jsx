import React, { Component } from 'react';

import Nav from './Nav';

class Header extends Component {

  render() {
    console.log('inside header', this.props.currentUser)
    return (
      <header>
        <p>Welcome {this.props.currentUser}</p>
        <Nav />
      </header>
    );
  };
}

export default Header;
