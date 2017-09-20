import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor(){
     super();
     this.state = {
         quizes : [],

     }
  }
  componentDidMount(){
    console.log("component didMount");
     axios('https://api.quizlet.com/2.0/sets/415?access_token=wa8vnvhGhsebXTcpcT7BJbQTPrMDVB6UyHyeXU36&whitespace=1')
         .then(res =>{
             this.setState(prevState =>{
                console.log(res.data);
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
        <h2> {this.state.quizes} </h2>
      </div>
    );
  }
}

export default App;
