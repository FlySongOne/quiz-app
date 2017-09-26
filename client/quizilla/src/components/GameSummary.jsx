import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class GameSummary extends Component {
//   constructor() {
//     super();
//     this.state = {
//       displayVal: "block",
//     }
//     this.displayVal = 'block';
//     this.changeDisplayVal = this.changeDisplayVal.bind(this);
// }
  // componentDidMount(){
  //   console.log('overlay did mount')
  //   document.getElementById("overlay").style.display = "block";
  // }

  // changeDisplayVal() {
  //   console.log('inside changeDisplayVal')
  //   let displayValue = 'none';
  //   this.setState({
  //     displayVal: displayValue,
  //   })
  // }

 render() {
  console.log("THIS PROPSSSSSSS", this.props)
    return (
    <div id='overlay' style={{ display: this.props.displayVal}}>
      <div id='text'>
          <h1>game summary</h1>
          <p>Number correct: {this.props.numberCorrect} </p>
          <button onClick={this.props.changeDisplayVal}>OK</button>
      </div>
    </div>

    );
  };
}

export default GameSummary;
