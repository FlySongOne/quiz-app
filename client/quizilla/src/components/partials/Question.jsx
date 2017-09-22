import React, { Component } from 'react';


class Question extends Component {
  render() {
    return (
      <div className="my-question">
        <h3>{this.props.element.term}</h3>
        <h4>{this.props.element.definition}</h4>
      </div>
    );
  };
}

export default Question;
