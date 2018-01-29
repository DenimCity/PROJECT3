import React, {Component} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import User from './User'
import NavBar from '../styled_components/NavBar'
import NavLinkWrapper from '../styled_components/NavLinkWrapper'
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
      <div>
        <NavBar>
          <NavLinkWrapper>
            <Link to="/">Home</Link>
            <Link to="/new">Create A User</Link>
            <Link to="/photographers">Photographers</Link>
            <Link to="/photogallery">Photo Gallery</Link>
            {/* <Link to="">About</Link> */}
          </NavLinkWrapper>
        </NavBar>
            <ListWrapper>
              <Users>
                {banana}
              </Users>
            </ListWrapper>

      </div>
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

const UserIdContainer = styled.div `
display:flex;
flex-wrap:wrap;
justify-content:row;
width:50px;
h1 {
  color:goldenrod;
}
`

// const UserWrapper = styled.div `
// display:flex;
// justify-content:center;
// `
