import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (


    <div id='form'>
      <p>Welcome to My Quizzilla!</p>
      <p>Please Log In</p>
        <form className="SubmitForm" >
           <input
           value= {this.props.username}
           className="nameInput"
           type="text"
           placeholder="User Name"
           />
           <input
           value= {this.props.password}
           className='nameInput'
           type='text'
           placeholder='Password'
           />
          <button
            type="submit"
            className="Button"
            id="submit"><Link type="submit" to="/quizzes">Enter</Link>
          </button>
        </form>
      </div>
    );
  };
}

export default Home;
