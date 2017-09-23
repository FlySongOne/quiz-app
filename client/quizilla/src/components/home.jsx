import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Home extends Component {
  constructor(){
     super();
     this.state = {
        users: [],
        inputUsernameVal:'',
        inputPasswordVal:'',
     }
     this.handleSubmit = this.handleSubmit.bind(this);
   //  this.inputUsernameVal='';
   //  this.inputPasswordVal='';
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


    <div id='form'>
      <p>Welcome to My Quizzilla!</p>
      <p>Please Log In</p>
        <form className="SubmitForm" onSubmit={this.handleSubmit}>
           <input
           value= {this.refs.inputUsernameVal}
           className="nameInput"
           type="text"
           placeholder="User Name"
           />
           <input
           value= {this.inputPasswordVal}
           className='nameInput'
           type='text'
           placeholder='Password'
           />
          <button
            type="submit"
            className="Button"
            id="submit">
          </button>
        </form>
      </div>
    );
  };
}

export default Home;
