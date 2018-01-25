import React, { Component } from 'react'
import styled from 'styled-components'
import {BrowserRouter as Router, Route, Switch, Link}  from 'react-router-dom'


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
          <Link to="#">Inspo</Link> 
          <Link to="#">Photos</Link> 
          <Link to="#">Edit</Link>
          <Link to="#">Delete</Link>
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

img {
  height:200px;
  width:190px;
  /* border-radius:5px; */
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

