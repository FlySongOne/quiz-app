import React, { Component } from 'react';
import Question from './partials/Question';
import axios from 'axios';
import GameSummary from './GameSummary';

class QuestionList extends Component {
  constructor() {
  super();
  this.state = {
    quizes: [],
    questions: [],
    gameSummary:'',
    numberCorrect: 0,
    score: 0,
    displayVal: 'block',
    gameOver: false,
    questionListDataReceived: false,
    }
     this.axiousUrl = 'https://api.quizlet.com/2.0/sets/415?client_id=27pm26gZCk&whitespace=1';
     this.numberCorrect = 0;
     this.score = 0;
     this.answerCounter = 0;
     this.questionCounter = 1;
     this.limit = 0;
     this.handleClick = this.handleClick.bind(this);
     this.changeDisplayVal = this.changeDisplayVal.bind(this);
  }
  changeDisplayVal() {
    this.setState({
      displayVal: "none",
    })
  }
  componentDidMount() {
    axios(this.axiousUrl)
      .then(res =>{
        this.limit = res.data.terms.length;
        console.log("res data", res.data.terms);
          this.setState({
            question: res.data.terms[0].term,
         });
     });
  }
  handleClick(){
      let input = document.getElementById('input').value

      console.log('Inside handleClick');

    if(this.answerCounter < this.limit){
      this.questionFunc(input);
    }

    if(this.answerCounter === this.limit-1)
    {
      this.setState({
        gameOver: true,
      })
    }
  }
  questionFunc(input){

    axios(this.axiosUrl)
      .then(res => {
        this.setState({
           answer: res.data.terms[this.answerCounter].definition,
           question: res.data.terms[this.questionCounter].term,
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
  // renderQuestionList() {
  //   console.log("renderQL", this.state.questionListDataReceived)
  //   if (this.state.questionListDataReceived) {
  //     return this.state.quizes.map((question) => {
  //       return <Question element={question} key={question.id} />
  //     });
  //   }
  // }
  yourScore(){
     console.log('Your score is '+this.score+` ${this.limit}`);
  }
  gameReset(){
     window.location.reload()
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
        {gameSummary}
        <h3>Your Score: {this.state.score} of 50</h3>
         <a href='#' onClick={this.gameReset.bind(this)}>Play Again</a>
      </div>
      )
  }
}

export default QuestionList;

