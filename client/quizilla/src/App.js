import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Route, Redirect, Switch}from 'react-router-dom';
import Quiz from './components/Quiz';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import Home from './components/home';
import About from './components/About';
import QuestionList from './components/QuestionList';
import UserList from './components/UserList';
import LoginForm from './components/LoginForm';


class App extends Component {
constructor(){
     super();
     this.state = {
        users: [],
        inputUsernameVal:'',
        inputPasswordVal:'',
        currentUser: '',
     }
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleInputUsernameChange = this.handleInputUsernameChange.bind(this);
     this.handleInputPasswordChange = this.handleInputPasswordChange.bind(this);


  }
  componentDidMount() {
    axios('https://localhost:3001/api/users')
      .then(res => {
        this.setState(prevState => {
          return {
            users: res.data.userData,
          }
        });
      });
  }
  handleInputUsernameChange(event) {
    this.setState({
      inputUsernameVal: event.target.value
    });

  }

  handleInputPasswordChange(event) {
    this.setState({
      inputPasswordVal: event.target.value
    });
  }

  currentUserFunc(username) {
  this.setState({
    currentUser: username,
  })
 }
  handleSubmit(event){
    this.currentUserFunc(this.state.inputUsernameVal);
    //console.log('handleSubmit', this.state);
    event.preventDefault();
    event.target.username='';
    event.target.password='';

    //console.log(this.state.inputUsernameVal);

 //   this.existingUser(this.state.inputUsernameVal, this.state.inputPasswordVal);
   axios.post('http://localhost:3001/api/users/', {
       username: this.state.inputUsernameVal,
       password: this.state.inputPasswordVal,
     })
     .then(res => { //console.log('after res in handleSubmit', res.data.data.users.username)
      {
        const newUser ={
           username: res.data.data.users.username,
           password: res.data.data.users.password,
        }
        this.setState((prevState)=>{
          return{
            users: prevState.users.concat(newUser)
          }
        })
        //console.log("handleSub prevState" , this.state);
      }
    }).catch(err =>console.log(err));

  }


  render() {
    //console.log('APP rendering', this.state);
    return (
      <div className="App">
        <div className="App-header">
        <Header currentUser={this.state.currentUser}/>
        <LoginForm
          handleInputUsernameChange={this.handleInputUsernameChange}
          handleInputPasswordChange={this.handleInputPasswordChange}
          handleSubmit={this.handleSubmit}
          inputUsernameVal={this.inputUsernameVal}
          inputPasswordVal={this.inputPasswordVal}
          />
        </div>

        <main>
          <Switch>
           <Route exact path='/' component={Home} />
           <Route exact path='/users' component={UserList} />
           <Route exact path='/quizzes' component={Quiz} />
           <Route exact path='/questions' component={QuestionList} />
           <Route exact path='/about' component={About} />
          </Switch>
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
