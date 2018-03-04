import React, { Component } from 'react'
import styled from 'styled-components'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'



const Edit = styled.button`
width: 58px;
height: 33px;
background-color:gold;
`

const Delete = styled.button`
background-color: red;
width: 58px;
height: 33px;
`
class Users extends Component {

  render(){
    const user = this.props
    return(
      <UserWrapper>
        <div className="picWrapper">
          <img src={user.photo} alt="pic of user"/>
          <Name>{user.firstName}</Name>
        </div>
        </UserWrapper>
    )
  }
}
export default Users


const UserWrapper = styled.div`
display:flex;
flex-direction:row;
font-size:15px;
align-items:center;
img {
  height:200px;
  width:190px;
  border:solid 1px black;
}
`
const InfoWrapper = styled.div`
border:solid 1px black;
height:200px;
`

 const Name = styled.div`
 height:15px;
 width:25px;
 background-color:green;
 cursor:pointer;

 &:hover{
background-color:gold;
 }
 `

