import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import axios from 'axios'
///Users imports 
import HomePage from './components/Users/HomePage'
import UserList from './components/Users/UserList'
import NewForm from './components/Users/NewForm'
import User from './components/Users/User'
import UserEditDelete from './components/Users/UserEditDelete'
///Photographer Imports 
import PhotographersList from './components/PhotoGraphers/PhotographersList'



class App extends Component {

  state = {
    users: [],
    photographers:[],
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

photographerDatabase = () => {
  axios.get('/api/photographers')
  .then(response => {
    const photographers = response.data
    this.setState({photographers: photographers})
  })
}

  componentWillMount() {
    this.userDatabase()
    this.photographerDatabase()
  }

  render() {
    ////the function to grab all the users
    const DataOfUsers = () => (<UserList MyUsers={this.state.users} />)
///taking the state from this page and shipping props to their designated folder
    const makeNewUser = () => (<NewForm createUser={this.createUser} users={this.state.users}/>)
    const editUser = (props) => (<UserEditDelete  users={this.state.users} {...props} />)

    const DataOfPhotographers = () => (<PhotographersList photographers={this.state.photographers} />)
    
    

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/user" component={DataOfUsers}/>
          <Route exact path="/new" component={makeNewUser}/>
          <Route exact path="/users" component={User}/>
          <Route exact path="/users/:userId" component={editUser}/>
          <Route exact path="users/userId/delete" component={editUser}/>
          <Route exact path="/photographers" component={DataOfPhotographers}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
