import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import axios from 'axios'
import HomePage from './components/HomePage'
import UserPage from './components/UserPage'
import NewsUserPAge from './components/NewUserPage'

class App extends Component {

  state = {
    users: []
  }

  userDatabase = () => {
    axios.get('/api/users').then(response => {
      const users = response.data
      this.setState({users: users})
    })
  }

  componentWillMount() {
    this.userDatabase()
  }
  
  render() {

    const userInfo = () => (<UserPage users={this.state.users}/>)
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/user" component={userInfo}/>
          <Route exact path="/new" component={NewsUserPAge}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
