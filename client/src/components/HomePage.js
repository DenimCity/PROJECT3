import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import styled from 'styled-components'

class HomePage extends Component {
  render() {
    return (
      <div className="body">
        <AboveNavBar className="HomePageBackground">
          <span className="homePageText">
            <h1>Welcome to ClickedIn!</h1>
          </span>
        </AboveNavBar>
        <NavBar className="navbar">
          <div className="button">
            <Link to="/">Home</Link>
          </div>
          <div className="button">
            <Link to="/user">Users</Link>
          </div>
          <div className="button">
            <Link to="#">Photos</Link>
          </div>
        </NavBar>
        <Body>
          <h2>Welcome Visual Creators</h2>
          <p>
              A page dedicated to photographers and their "Photogmanship. Come one come all.
              Become a user and upload away.
            </p>
            <div className="imageContainer">
           {/* loop in an array of images in this column */}
            </div>
          <div className="textContainer">
    <h5>Taking Over The World One Click At a Time</h5>
          </div>
          <div className="textContainer">
            <p>
              With over 10 years of experience in the photography trade, we provided a avenue
              for our artists. In need of a influencer, Look no further!
            </p>
            <div className="image2">
            </div>
          </div>
        </Body>
      </div>
    )
  }
}
export default HomePage

export const AboveNavBar = styled.div`
background-image: url(https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200);
height: 235px;
display: flex;
background-position: center;
width: 100%;
justify-content: center;
border: 1px solid;
span {
  display: flex;
  justify-content:row-reverse;
}
h1{
  font-family: cursive;
  color: white;
  text-shadow: 2px 2px 4px #D2CCA1;
}
.homePageText {
  flex-direction: column-reverse;
}`
export const NavBar = styled.div`
background-color:black;
  height: 50px;
  display: flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  
.button {
  margin:2px 50px 2px 50px;
}
  a {
    color:white;
  }
a:hover {
  cursor:pointer;
  color:goldenrod;
}`
const Body = styled.div`
h2 {
  padding-top:2%;
  color: #E83151;
    text-align: center;
    font-family: serif; 
}
h5{
    color: #E83151;
    padding-top:2%;
    text-align: center;
    font-family: serif;
}
p {
  text-align:center;
  font-size:rem;
  margin-left: 40px;
  margin-right: 40px;
}
.imageContainer{
  background-image:url('https://i.imgur.com/NRnhMjw.jpg')
  height:31px;
  display:flex;
  flex-direction:row;
}
img {
  height:50px;
  width:50px;
}`