import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Route, Redirect, Switch}from 'react-router-dom';
import QuestionList from './components/QuestionList';
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
     axios('https://api.quizlet.com/2.0/sets/415?access_token=AsWhuQmWunahrHGbpjqZ4TSV3HeCtrpv2kYNd5DM&whitespace=1')
         .then(res =>{
          console.log("res data", res.data.terms);
             this.setState(prevState =>{
                return{
                    quizes: res.data.terms
                }
             });
         });
  }
  renderQuiz() {
      return this.state.quizes.map((question) => {
        //return <div>(question={question} key={question.id})</div>
        return <div key={question.id}> {question} </div>
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
        <p>Here are your quizzes</p>
          <div className="questionList">
            <QuestionList data={this.state.quizes} />
          </div>
        <Footer />
      </div>
    );
  }
}

export default App;
