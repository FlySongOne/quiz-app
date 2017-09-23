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
     this.answerCounter = 0;
     this.questionCounter = 1;
     this.limit = 0;
     this.handleClick = this.handleClick.bind(this);

  }


  componentDidMount(){
    console.log("component didMount");
     axios('http://localhost:3001/api/questions/')
      .then(res => {
    this.limit = res.data.data.questions.length;
    this.setState({
           question: res.data.data.questions[0].question,

     })
    });

  }

  handleClick(){
    let input = document.getElementById('input').value

    console.log('Inside handleClick');
    this.questionFunc(input);
    let field = document.getElementById('input');
    field = "";
  }

  questionFunc(input){

    axios('http://localhost:3001/api/questions/')
      .then(res => {
        this.setState({
           answer: res.data.data.questions[this.answerCounter].answer,
           question: res.data.data.questions[this.questionCounter].question,
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

        if( this.answerCounter < 5){
           this.answerCounter += 1;
        }
        if(this.questionCounter < 4){
           this.questionCounter += 1;
        }


    })

  }

  yourScore(){
     console.log('Your score is '+this.score+'/50');
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
        <Header />
        </div>

        <main>
          <Switch>
           <Route exact path='/' component={Home}/>
           <Route exact path='/quizzes' component={QuestionList} />
           <Route exact path='/about' component={About} />
           <Redirect to='/' />
          </Switch>


          <h3>{this.state.question}</h3>
          <input id='input' placeholder='your answer'></input>
          <button onClick={this.handleClick}>Answer</button>
          <h3>Your Score: {this.state.score} of 50</h3>

        </main>

        <Footer />


      </div>
    );
  }
}

export default App;
