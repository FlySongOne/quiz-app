import React, { Component } from 'react';
import Question from './partials/Question';
import axios from 'axios';

class QuestionList extends Component {
  constructor() {
  super();
  this.state = {
    quizes: [],
    questions: [],
    questionListDataReceived: false,
    }
     this.score = 0;
     this.answerCounter = 0;
     this.questionCounter = 1;
     this.limit = 0;
     this.handleClick = this.handleClick.bind(this);
  }
componentDidMount() {
  axios('https://api.quizlet.com/2.0/sets/415?client_id=27pm26gZCk&whitespace=1')
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
      this.questionFunc(input);
      let field = document.getElementById('input');
      field = "";
    }
  questionFunc(input){

    axios('https://api.quizlet.com/2.0/sets/415?client_id=27pm26gZCk&whitespace=1')
      .then(res => {
        this.setState({
           answer: res.data.terms[this.answerCounter].definition,
           question: res.data.terms[this.questionCounter].term,
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
  // renderQuestionList() {
  //   console.log("renderQL", this.state.questionListDataReceived)
  //   if (this.state.questionListDataReceived) {
  //     return this.state.quizes.map((question) => {
  //       return <Question element={question} key={question.id} />
  //     });
  //   }
  // }
  yourScore(){
     console.log('Your score is '+this.score+'/50');
  }
  render() {
    return(
      <div>
        <h3>{this.state.question}</h3>
        <input id='input' placeholder='your answer'></input>
        <button onClick={this.handleClick}>Answer</button>
        <h3>Your Score: {this.state.score} of 50</h3>
      </div>
      )
  }
}

export default QuestionList;

