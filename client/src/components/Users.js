import React, { Component } from 'react'
import styled from 'styled-components'
import {BrowserRouter as Router, Route, Switch, Link}  from 'react-router-dom'



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
    return(
      <UserWrapper>
        <div className="picWrapper">
          <img src={this.props.photo} alt="pic of user"/>
        </div>
        <InfoWrapper className="infoWrapper">
        <div>First: {this.props.firstName}</div>
        <div>Last: {this.props.lastName}</div>
        <div>Instagram: {this.props.instagram}</div>
        <div>GoToCamera: {this.props.camera}</div>
        <div>Fav Lens: {this.props.lens}</div>
        <LinkWrapper>
          <Edit to="#">Edit</Edit>
          <Delete to="#">Delete</Delete>

        </LinkWrapper>
        </InfoWrapper>
        </UserWrapper>
    )
  }
}
export default Users


const UserWrapper = styled.div`
display:flex;
flex-direction:row;
font-size:35px;
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
 const LinkWrapper = styled.div`
 display:flex;
 align-items:center;
 justify-content:center;
 flex-direction: row;
 margins: 2px 0 0 2px;
 
  a {
  margin: 2px 3px 4px 5px;
}

 `

