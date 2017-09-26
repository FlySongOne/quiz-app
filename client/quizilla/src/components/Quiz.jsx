import React, { Component } from 'react';
import axios from 'axios';
import Header from './partials/Header';
import Footer from './partials/Footer';
import Home from './home';
import About from './About';
import QuestionList from './QuestionList';
import {Link} from 'react-router-dom';
import GameSummary from './GameSummary';

class Quiz extends Component {
  constructor(){
   super();
   this.state = {
       quizes: [],
       questions: [],
       gameSummary:'',
       numberCorrect:0,
       score: 0,
       displayVal: 'block',
       gameOver: false,
   }
 //  this.numberCorrect = 0;
   this.score = 0;
   this.answerCounter = 0;
   this.questionCounter = 1;
   this.limit = 0;
   this.handleClick = this.handleClick.bind(this);
   this.changeDisplayVal = this.changeDisplayVal.bind(this);
  }

  changeDisplayVal() {
    console.log('inside changeDisplayVal')
    this.setState({
      displayVal: "none",
    })
  }
  componentDidMount(){
    console.log("component didMount");
     axios('http://localhost:3001/api/questions/')
      .then(res => {
    this.limit = res.data.data.questions.length;
    console.log()
    this.setState({
           question: res.data.data.questions[0].question,

     })
    });
  }
handleClick(){
    let input = document.getElementById('input').value

    console.log('Inside handleClick');

    if(this.answerCounter < this.limit ){
      this.questionFunc(input);

    }

    if(this.answerCounter === this.limit-1){
      this.setState({
        gameOver: true,
        })
      console.log('this.game over is ',this.gameOver);
    }

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
           this.score += 1;
           this.setState({
              score: this.score,
              numberCorrect: this.score,
           })
        }else{
           console.log("Wrong answer!");
        }
        console.log("handle click", input, this.state.answer, this.score )
        if( this.answerCounter < this.limit){
           this.answerCounter += 1;
        }
        if(this.questionCounter < this.limit-1){
           this.questionCounter += 1;
        }
    })
  }
  yourScore(){
     console.log('Your score is '+this.score+` ${this.limit}`);
  }

  gameSummaryFunc(){
     console.log(`You guessed ${this.state.numberCorrect} out of ${this.limit}`)
  //   event.preventDefault();

     this.setState({ numberCorrect: this.state.score})
  }


  render() {
    console.log("THIS STATE GAME OVER",this.state)
    let gameSummary = this.state.gameOver ? <GameSummary
    displayVal={this.state.displayVal}
    changeDisplayVal={this.changeDisplayVal}
    numberCorrect={this.state.numberCorrect} /> :null;
    return(
      <div>
        <h3>{this.state.question}</h3>
        <input id='input' placeholder='your answer'></input>
        <button onClick={this.handleClick}>Answer</button>
        { gameSummary }

        <h3>Your Score: {this.state.score} of {this.limit}</h3>
        <a href='#' onClick={this.gameSummaryFunc.bind(this)}>Game Summary</a>
      </div>
      )
  }

}//Closing for Class Quiz

export default Quiz;
