import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Route, Redirect, Switch}from 'react-router-dom';
import Quiz from './components/Quiz';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import Home from './components/Home';
import About from './components/About';
import QuestionList from './components/QuestionList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
        <Header />
        </div>
        <main>
          <Switch>
           <Route exact path='/' component={Home}/>
           <Route exact path='/quizzes' component={Quiz} />
           <Route exact path='/about' component={About} />
           <Redirect to='/' />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
