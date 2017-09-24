import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Route, Redirect, Switch}from 'react-router-dom';
import Quiz from './components/Quiz';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import Home from './components/Home';
import About from './components/About';
import QuestionList from './components/QuestionList';

class App extends Component {
  constructor(){
     super();
     this.state = {
        users: [],
        inputUsernameVal:'',
        inputPasswordVal:'',
     }
     this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event){
    console.log('handleSubmit' , this.refs.inputUsernameVal);
    event.preventDefault();
    // event.target.username='';
    // event.target.password='';

     axios.post('http://localhost:3001/api/users/', {
       username: this.state.inputUsernameVal,
       password: this.state.inputPasswordVal,
     })
     .then(res => { console.log('after res', this)
      {
        const newUser ={

           username: res.data.data.user.username,
           password: res.data.data.user.password,
        }
        console.log("handleSub" , res);
        this.setState((prevState)=>{
          return{
            users: prevState.users.concat(newUser)
          }
        })
      }
    }).catch(err =>console.log(err));
  }




  render() {
    return (
      <div className="App">
        <div className="App-header">
        <Header />
        </div>
        <main>
          <Switch>
           <Route exact path='/' component={Home}/>
           <Route exact path='/quizzes' component={Quiz} />
           <Route exact path='/about' component={About} />
           <Redirect to='/' />
          </Switch>
        </main>
        <Footer />
        <Home handleSubmit={this.handleSubmit}/>
      </div>

    );
  }
}

export default App;
