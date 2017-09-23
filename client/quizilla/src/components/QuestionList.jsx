import React, { Component } from 'react';
import Question from './partials/Question';
import axios from 'axios';

class QuestionList extends Component {
  constructor() {
  super();
  this.state = {
    quizes: [],
    questionListDataReceived: false,
    }
  }
componentDidMount() {
  let access_token = '8hSjdarnGQSwdZy3ybZFzy';
  axios('https://api.quizlet.com/2.0/sets/415?access_token=WUJPDuYy6CcKaWjbGd7Eukmh5fhzufukn4ymrwzY&whitespace=1')
    .then(res =>{
      console.log("res data", res.data.terms);
        this.setState(prevState =>{
          return{
            quizes: res.data.terms
            }
         });
     });
  }

  renderQuestionList() {
    if (this.state.questionListDataReceived) {
      return this.state.questionListData.map((question) => {
        return <Question question={question} key={question.id} />
      });
    }
  }

  render() {
    return (
      <div className="questionlist">
        {this.renderQuestionList()}
      </div>
    );
  };
}

export default QuestionList;

