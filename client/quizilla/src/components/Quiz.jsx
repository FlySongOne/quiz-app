import React, { Component } from 'react';
import axios from 'axios';
import Header from './partials/Header';
import Footer from './partials/Footer';
import Home from './home';
import About from './About';
import QuestionList from './QuestionList';

class Quiz extends Component {
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
        console.log("handle click", input, this.state.answer, this.score )
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
    return(
      <div id='quiz'>
        <h3>{this.state.question}</h3>
        <input id='input' placeholder='Your Answer'></input>
        <button id='answer' onClick={this.handleClick}>Enter</button>
        <h3>Your Score: {this.state.score} of 50</h3>
      </div>
      )
  }

}
//Closing for Class Quiz

export default Quiz;
