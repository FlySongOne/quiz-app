import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Route, Redirect, Switch}from 'react-router-dom';
import QuestionList from './components/QuestionList';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import Home from './components/Home';
import About from './components/About';

class App extends Component {
  constructor(){
     super();
     this.state = {
         quizes: [],

     }
  }

curl -H "Authorization: Bearer 8hSjdarnGQSwdZy3ybZFzy" https://api.quizlet.com/2.0/users/xyanz


  componentDidMount(){
    let access_token = '8hSjdarnGQSwdZy3ybZFzy';
    console.log("component didMount");
     axios.get({
      url: 'https://api.quizlet.com/2.0/users/xyanz',
      headers: {
        authorization: 'Bearer 8hSjdarnGQSwdZy3ybZFzy',

      }
   }).then(res =>{
          console.log("res data", res.data);
             this.setState(prevState =>{
                return{
                    quizes: res.data
                }
             });
         });
  }
  renderQuiz() {
      return this.state.quizes.map((question) => {
        //return <div>(question={question} key={question.id})</div>
        return <div key={question.id}> {question} </div>
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Header />
        <main>
          <Switch>
           <Route exact path='/' component={Home}/>
           <Route exact path='/about' component={About} />
           <Redirect to='/' />
          </Switch>
        </main>
        <p>Here are your quizzes</p>
          <div className="questionList">
            <QuestionList data={this.state.quizes} />
          </div>
        <Footer />
      </div>
    );
  }
}

export default App;
