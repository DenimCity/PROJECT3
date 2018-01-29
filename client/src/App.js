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
///PhotoGallery
import PhotoGallery from './components/PhotoGallery/PhotoGallery'


class App extends Component {

  state = {
    users: [],
    photographers:[],
    photos:[]
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

photoGalleryPhotos = () => {
  console.log("here from  the photo axios call")
  axios.get('/api/photos').then(response =>{
    const photos = response.data
    console.log("we have the data from the photo axios call", photos)
    this.setState({photos: photos})
  })
}

  componentWillMount() {
    this.userDatabase()
    this.photoGalleryPhotos()
    this.photographerDatabase()
  }

  render() {
    ////the function to grab all the users
    const DataOfUsers = () => (<UserList MyUsers={this.state.users} />)
///taking the state from this page and shipping props to their designated folder
    const makeNewUser = () => (<NewForm createUser={this.createUser} users={this.state.users}/>)
    const editUser = (props) => (<UserEditDelete  users={this.state.users} {...props} />)

    const DataOfPhotographers = () => (<PhotographersList MyPhotographers={this.state.photographers} />)
   
    const allOfThePhotos = () => (<PhotoGallery MyPictures={this.state.photos} />)

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
          <Route exact path="/photogallery" component={allOfThePhotos}/>
          <Route exact path="*" render={() => (<h4>Page not found!</h4>)} />

          {/* <Route exact path="/photographers/new" component={NewPhotographer}/> */}
        </Switch>
      </Router>
    )
  }
}

export default App;
