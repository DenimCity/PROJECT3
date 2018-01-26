import React, {Component} from 'react'
import Users from './Users'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


class UserList extends Component {

  render() {
    const userList = this
      .props
      .users
      .map((user, index) => {
        return (<Users
          key={index}
          photo={user.photo}
          firstName={user.firstName}
          lastName={user.lastName}
          instagram={user.instagram}
          camera={user.camera}
          lens={user.lens}/>)
      })
    return (
      <UserIdContainer >
        <div className="NavButtons">
          <Link to="/">Home</Link>
          <Link to="/new">Create User</Link>
          <h1>Users List</h1>
        </div>
        <div>
          {userList}
        </div>
      </UserIdContainer>
    )
  }
}
export default UserList

const UserIdContainer = styled.div `
display:flex;
flex-direction:column;
flex-wrap:wrap;
justify-content:center;
h1 {
  color:goldenrod;
}
.NavButtons {
display:flex;
flex-direction:column;
  a{
  color:green;
  margin:2px 0px 0px 5px;
}}
`

