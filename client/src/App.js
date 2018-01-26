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

  updateUser = () => {
    console.log ("from the edit function in UserView")
    axios.patch(`/api/users/${this.state.user._id}`, this.state.user)
    console.log ("ive made it to the edit router in the userview")
    .then(res => {
    const update = res.data
      console.log("i have the the date user to delete ", update)
      this.props.updateUser()
  
      }).catch((error)=>{
        console.log ("ERROR bob")
      })
  }

  componentWillMount() {
    this.userDatabase()
  }

  render() {
    ////the function to grab all the users
    const DataOfUsers = () => (<UserList MyUsers={this.state.users} />)

    const makeNewUser = () => (<NewForm createUser={this.createUser} users={this.state.users}/>)
    const editUser = (props) => (<UserEditDelete     updateUser={this.updateUser} users={this.state.users} {...props} />)

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
