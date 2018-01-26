import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import axios from 'axios'
import HomePage from './components/HomePage'
import UserList from './components/UserList'
import NewForm from './components/NewForm'
import User from './components/User'
import UserEditDelete from './components/UserEditDelete'

class App extends Component {

  state = {
    users: []
  }

  userDatabase = () => {
    axios
      .get('/api/users')
      .then(response => {
        const users = response.data
        this.setState({users: users})
      })
  }

  createUser = async(user) => {
    // send the user to the database
    const response = await axios.post(`/api/users`, user)

    // grab the new user we just created in the database
    const newUser = response.data

    // put that new user into our list of users on the `state`
    const users = [...this.state.users]
    users.push(newUser)
    this.setState({users})
  }

  
  

  componentWillMount() {
    this.userDatabase()
  }

  render() {
    ////the function to grab all the users
    const DataOfUsers = () => (<UserList MyUsers={this.state.users} />)

    const makeNewUser = () => (<NewForm createUser={this.createUser} users={this.state.users}/>)
    const editUser = (props) => (<UserEditDelete      users={this.state.users} {...props} />)

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/user" component={DataOfUsers}/>
          <Route exact path="/new" component={makeNewUser}/>
          <Route exact path="/users" component={User}/>
          <Route exact path="/users/:userId" component={editUser}/>

        </Switch>
      </Router>
    )
  }
}

export default App;
