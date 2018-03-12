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
          <Link to="/photographers">Photographers</Link>
          <Link to="/photographers/photogallery">Photo Gallery</Link>
          {/* <Link to="">About</Link> */}
        </LinkWrapper>
      </NavBarStyles>
    )

  }

}

const NavBarStyles = styled.div `
background: #293E49;
    height: 5vh;
    width: 100vw;
    @media (max-width: 669px) {
      height: 11vh;
}
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
    font-size:1vh;
  &:hover{
    background-color:white;
    color:black;
  }
}

@media (max-width: 669px) {
  font-size: 9px;
  }
`

const LinkWrapper = styled.div `
    display: flex;
    justify-content: center;
    padding: 1vh;
    flex-wrap: wrap;
@media (max-width:669px){
padding: 4vh;
font-size:1vh;
flex-wrap: inherit;
}
`