import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Home extends Component {

  render() {
    return (
    <div id='form'>
      <p>Welcome to My Quizzilla!</p>
      <p>Please Log In</p>
        <form className="SubmitForm" onSubmit={this.props.handleSubmit}>
           <input
           value= {this.props.inputUsernameVal}
           className="nameInput"
           type="text"
           placeholder="User Name"
           onChange={this.props.handleInputUsernameChange}
           />
           <input
           value= {this.props.inputPasswordVal}
           className='nameInput'
           type='text'
           placeholder='Password'
           onChange={this.props.handleInputPasswordChange}
           />
          <button
            type="submit"
            className="Button"
            id="submit">Login
          </button>
        </form>
      </div>
    );
  };
}

export default Home;
