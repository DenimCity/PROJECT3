import styled from 'styled-components'
import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class NavBar extends Component {
  render() {

    return (
      <NavBarStyles>
        <LinkWrapper>
          <Link to="/">Home</Link>
          <Link to="/users">Users</Link>
          <Link to="/new">Create A User</Link>
          <Link to="/photographers">Photographers</Link>
          <Link to="/photogallery">Photo Gallery</Link>
          {/* <Link to="">About</Link> */}
        </LinkWrapper>
      </NavBarStyles>

    )

  }

}

const NavBarStyles = styled.div `
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

const LinkWrapper = styled.div `
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