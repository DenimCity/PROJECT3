import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import axios from 'axios'
import HomePage from './components/HomePage'
import UserList from './components/UserList'
import NewsUserPAge from './components/NewUserPage'



class App extends Component {

  state = {
    users: [],
    
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
////the function to grab all the users 
    const userInfo = () => (<UserList users={this.state.users}/>)
//function  to create a new user and pass that information to the the 
    const newUser = () =>(<NewsUserPAge 
      users={this.state.users}
      // createUser={this.state.newUsers}
      />)

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/user" component={userInfo}/>
          {/* <Route exact path="/edit" compoent={} */}
          <Route exact path="/new" component={newUser}/>

        </Switch>
      </Router>
    )
  }
}

export default App;
