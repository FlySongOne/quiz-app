import React, { Component } from 'react';
import User from './partials/User';
import axios from 'axios';

class UserList extends Component {
  constructor() {
    super();
    // state
    this.state = {
      test: "test",
      usersListData: [],
      usersListDataReceived: false,
    }
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  componentDidMount() {
    console.log("this.state ", this.state)
    fetch('http://localhost:3001/api/users')
      .then((res) => { console.log(res);
        return res.json();
      }).then((jsonRes) => {
        this.setState({
          usersListData: jsonRes.data.users,
          usersListDataReceived: true,
        })
         console.log("this.state ", this.state)
      })
  }

  renderUserList() {
    console.log("this is usersListDataReceived ", this.state.usersListDataReceived)
    if (this.state.usersListDataReceived) {
      return this.state.usersListData.map((user) => {
        console.log("inside renderUserList method", user)
        return <User user={user} key={user.id} handleItemDelete={this.handleItemDelete}/>
      });

    }
  }

  handleItemDelete(id) {
   // event.preventDefault();
   console.log("inside handleItemDelete ", this.state.test)
    axios.delete("http://localhost:3000/api/users/"+id)
    .then((res) => {
      console.log("inside first them after delete")
      const users = this.state.usersListData.filter((user) => {
        if(user.id !== id) { return user}
      })
      this.setState({
           usersListData:users
      });
      console.log("This is usersListData ", this.state.usersListData)
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <div className="userList">
        {this.renderUserList()}
      </div>
    );
  };
}

export default UserList;
