import React, { Component } from 'react'
import styled from 'styled-components'


export default class Nav extends Component {
  render() {
    return (
      <NavBar>
        <NavLinkWrapper>
        <a href="/">Home</a>
           <a href="/user">Users</a>
           <a href="/photographers">photographers</a>
           <a href="/photogallery">Photo Gallery</a>
        </NavLinkWrapper>
     </NavBar>
    )
  }
}
  
  
  
  
  
  const NavBar = styled.div `
background-image: url(https://i.imgur.com/gp9Klik.jpg);
height: 98px;
background-position: left;
width: 100vw;


border: transparent;
a {
  background-color: transparent;
    border: 2px solid #fff;
    color: #fff;
    border-radius: 300px;
    letter-spacing: 2px;
    font-weight: 600;
    margin-left: 1em;
    padding: 1em 1.5em !important;
    text-transform: uppercase;
    text-decoration:none;
    line-height:1em;
  &:hover{
    background-color:white;
    color:black;
  }
}
`
const NavLinkWrapper = styled.div`
display: flex;
justify-content: flex-end;
color: #f2f2f2;
text-align: center;
padding: 14px;
text-decoration: none;
text-align: right;
font-size: 14px;
flex-direction: inherit;
flex-wrap: wrap;
@media (max-width:600px){

font-size:8px;
}
`