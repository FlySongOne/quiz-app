import React, { Component } from 'react';


class SingleQuestion extends Component {
  constructor(props) {
    super(props);
    // state
    this.state = {
      id: this.props.match.params.id,
      question: null,
      questionDataReceived: false,
    }
  }

  componentDidMount() {
    fetch(`https://ada-api.herokuapp.com/api/questions/${this.state.id}`)
      .then((res) => {
        return res.json();
      }).then((jsonRes) => {
        this.setState({
          question: jsonRes.question,
          questionDataReceived: true,
        });
      });
  }

  renderQuestion() {
    if (this.state.questionDataReceived) {
      return (
        <div className="my-question">
          <h3>{this.state.question.content}</h3>
          <span className="author">{this.state.question.author}</span>
          <span className="genre">{this.state.question.genre_type}</span>
        </div>
      );
    } else return <Loading />;
  }


  render() {
    return (
      <div className="single-question">
        {this.renderQuestion()}
      </div>
    );
  };
}

export default SingleQuestion;
