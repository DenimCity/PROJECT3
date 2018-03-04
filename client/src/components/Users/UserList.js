import React, {Component} from 'react'
import styled from 'styled-components'
import User from './User'
class UserList extends Component {

  render() {

    const banana = this
      .props
      .MyUsers
      .map((user, index) => {
        return (<User
          key={index}
          photo={user.photo}
          firstName={user.firstName}
          lastName={user.lastName}
          instagram={user.instagram}
          camera={user.camera}
          lens={user.lens}
          id={user._id}/>)
      })

    return (
        <ListWrapper>
          <Users>
            {banana}
          </Users>
        </ListWrapper>

    )
  }
}
export default UserList

const ListWrapper = styled.div `
display:flex;
justify-content:center;
align-items:center;
`
const Users = styled.div `
display:grid;
grid-template-columns:33% 33% 33%;

`