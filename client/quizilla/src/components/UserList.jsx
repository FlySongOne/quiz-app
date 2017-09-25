import React, { Component } from 'react';
import User from './partials/User';

class UserList extends Component {
  constructor() {
    super();
    // state
    this.state = {
      usersListData: null,
      usersListDataReceived: false,
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/users')
      .then((res) => { console.log(res);
        return res.json();
      }).then((jsonRes) => {
        this.setState({
          usersListData: jsonRes.data.users,
          usersListDataReceived: true,
        })
      })
  }

  renderUserList() {
    if (this.state.usersListDataReceived) {
      return this.state.usersListData.map((user) => {
        return <User user={user} key={user.id} />
      });

    }
  }

  render() {
    return (
      <div className="quotelist">
        {this.renderUserList()}
      </div>
    );
  };
}

export default UserList;
