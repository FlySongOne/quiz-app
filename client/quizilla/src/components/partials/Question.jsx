import React, { Component } from 'react';


class Question extends Component {
  render() {
    return (
      <div className="my-question">
        <h3>{this.props.question.content}</h3>
        <span className="question">{this.props.quote.author}</span>
      </div>
    );
  };
}

export default Question;
