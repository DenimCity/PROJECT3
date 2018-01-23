import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import './App.css';
import axios from 'axios'
import HomePage from './components/HomePage'
import UserPage from './components/UserPage'





class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/user" component={UserPage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
