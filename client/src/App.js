import React, {Component} from 'react';
import bg from './pictures/userphotos/navBar background.jpg'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import User from './components/User'

// <Router>

{/* <Link to=''></Link>
      <Link to=''></Link>
      <Link to=''></Link>
      <Link to=''></Link>
      <Link to=''></Link>
      <Link to=''></Link> */
}
{/* </Router> */
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="body">
          <div className="HomePageBackground">
            <span className="homePageText">
              <h1>Welcome to ClickedIn!</h1>
            </span>
          </div>
          <nav className="navbar">

            <div className="buttonLeftCorner">
              <a href="#home">ClickedIn</a>
            </div>
            <div className="buttonRightContainer">
              <div className="buttonRight">
                <Link to="/User">Users</Link>

              </div>
              <div className="buttonRight">
                <a href="http://">Photos</a>
              </div>
            </div>
          </nav>
          <div className="homePageBtmContainer">
            <h2>Welcome Visual Creators</h2>

            <div className="textContainer">
              <p>
                A page dedicated to photographers and their "Photogmanship. Come one come all.
                Become a user and upload away.
              </p>
            </div>
          </div>
        </div>

      </Router>
    );
  }
}

export default App;
