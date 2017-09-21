import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';



class App extends Component {
  constructor(){
     super();
     this.state = {
         quizes: [],

     }
  }
  componentDidMount(){
    console.log("component didMount");
     axios('https://api.quizlet.com/2.0/users/xyanz?access_token=9XwJVHqgT9sje5xUHEHGe8KbW37SCX7CUAuF8Zh7&whitespace=1')
         .then(res =>{
          console.log("res data", res.data);
             this.setState(prevState =>{
                return{
                    quizes: res.data
                }
             });
         });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p>Here are your quizzes</p>
          {this.state.quizes}
      </div>
    );
  }
}

export default App;
