import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Route, Redirect, Switch}from 'react-router-dom';

import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import Home from './components/Home';
import About from './components/About';

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
        <Header />
        <main>
          <Switch>

           <Route exact path='/' component={Home}/>
           <Route exact path='/about' component={About} />
           <Redirect to='/' />

          </Switch>
        </main>

        <Footer />
        <p>Here are your quizzes</p>



      </div>
    );
  }
}

export default App;
