import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map((user, index) => {
            return (
            <li key={index}>{user.username}</li>
            )
          })}
        </ul>
        <p>
          Total Users: {this.props.userCount}
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { users: state.users, userCount: state.users.length }
}

export default connect(mapStateToProps)(Users)
