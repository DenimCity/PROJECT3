import React, {Component} from 'react'
import User from './User'
import {AboveNavBar, NavBar} from './HomePage'
import styled from 'styled-components'

class UserPage extends Component {
  render() {
    const userList = this
      .props
      .users
      .map((user, index) => {
        return (<User
          key={index}
          photo={user.photo}
          firstName={user.firstName}
          lastName={user.lastName}
          instagram={user.instagram}
          camera={user.camera}
          lens={user.lens}/>)
      })
    return (
      <UserIdContainer className="userIdContainer">
        <h1>Users List</h1>
        <div>
          {userList}
        </div>
      </UserIdContainer>
    )
  }
}
export default UserPage

const UserIdContainer = styled.div `

display:flex;
flex-direction:row;
flex-wrap:wrap;
`