import React, { Component } from 'react';
import bg from './pictures/userphotos/navBar background.jpg'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';


  // <Router>
      
      {/* <Link to=''></Link>
      <Link to=''></Link>
      <Link to=''></Link>
      <Link to=''></Link>
      <Link to=''></Link>
      <Link to=''></Link> */}
 {/* </Router> */}
 
class App extends Component {
  render() {
    return (
    
      
        <div className="App">
        <header className="App-header">
          <img src={bg} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>

    );
  }
}

export default App;
