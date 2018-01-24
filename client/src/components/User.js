import React, { Component } from 'react'
import styled from 'styled-components'


class User extends Component {

  render(){


    return(
      <UserWrapper>
        <div>
          <img src={this.props.photo} alt="pic of user"/>
        </div>
        <div>First Name:{this.props.firstName}</div>
        <div>Last Name:{this.props.lastName}</div>
        <div>Instagram:{this.props.instagram}</div>
        <div>Go to Camera:{this.props.camera}</div>
        <div>Favorite Lens:{this.props.lens}</div>
        </UserWrapper>
      
    )
  }
}





export default User
const UserWrapper = styled.div`
display:flex;
flex-direction:row;


img {
  height:190px;
  width:190px;
  border-radius:10px;
}

`