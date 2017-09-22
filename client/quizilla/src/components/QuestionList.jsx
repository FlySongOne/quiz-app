import React, { Component } from 'react';
import Question from './partials/Question';
import axios from 'axios';

class QuestionList extends Component {
  constructor() {
  super();
  this.state = {
    quizes: [],
    questionListDataReceived: true,
    }
  }
componentDidMount() {
  axios('https://api.quizlet.com/2.0/sets/415?access_token=ZGmxFs82dsm35aqxd3MYuDSSVN5wk74Zjq88PwXa&whitespace=1')
    .then(res => {
      console.log("res data", res.data.terms);
        this.setState({
            quizes: res.data.terms
         });
     });
  }

  renderQuestionList() {
    console.log("renderQL", this.state.questionListDataReceived)
    if (this.state.questionListDataReceived) {
      return this.state.quizes.map((question) => {
        return <Question element={question} key={question.id} />
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

