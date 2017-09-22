import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Route, Redirect, Switch}from 'react-router-dom';

import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import Home from './components/Home';
import About from './components/About';
import QuestionList from './components/QuestionList';

class App extends Component {
  constructor(){
     super();
     this.state = {
         quizes: [],
         questions: [],

     }
     this.score = 0;
     this.counter = 0;
     this.limit = 0;
     this.handleClick = this.handleClick.bind(this);

  }

//this.setState({
//           question: res.data.data.questions[this.counter].question,
//    })
  componentDidMount(){
    console.log("component didMount");
     axios('http://localhost:3001/api/questions/')
      .then(res => {
    this.limit = res.data.data.questions.length-1;
    this.setState({
           question: res.data.data.questions[0].question,

     })
    });
  }



  handleClick(){
    let input = document.getElementById('input').value
    console.log('Inside handleClick');
    this.questionFunc(input);

  }

  questionFunc(input){
    axios('http://localhost:3001/api/questions/')
      .then(res => {
        this.setState({
           answer: res.data.data.questions[this.counter].answer,
           question: res.data.data.questions[this.counter+1].question,
        })
        if(input === this.state.answer)
        {
           console.log("Correct answer!");
           this.score += 10;
           this.setState({
              score: this.score,
           })
        }else{
           console.log("Wrong answer!");
        }

        console.log("handle click", input, this.state.answer, this.score );

        if( this.counter < this.limit-1){
           this.counter += 1;
        }
    })

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
           <Route exact path='/quizzes' component={QuestionList} />
           <Route exact path='/about' component={About} />
           <Redirect to='/' />
          </Switch>


          <h3>{this.state.question}</h3>
          <input id='input'></input>
          <button onClick={this.handleClick}>Answer</button>

          <h3>{this.state.score}</h3>

        </main>

        <Footer />
        <p>Here are your quizzes</p>

      </div>
    );
  }
}

export default App;
