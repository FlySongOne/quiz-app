import React, { Component } from 'react';

class QuestionList extends Component {
  constructor() {
  super();
  this.state = {
    quizes: [],
    }
  }
componentDidMount() {
    fetch('https://ada-api.herokuapp.com/api/question')
      .then((res) => {
        return res.json();
      }).then((jsonRes) => {
        this.setState({
          questionListData: jsonRes.questionData,
          questionListDataReceived: true,
        })
      })
  }

  renderQuestionList() {
    if (this.state.questionListDataReceived) {
      return this.state.questionListData.map((question) => {
        return <Question question={question} key={question.id} />
      });
    } else return <Loading />
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

