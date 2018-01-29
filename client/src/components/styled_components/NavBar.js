import styled from 'styled-components'

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

export default NavBar