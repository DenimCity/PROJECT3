import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import axios from 'axios'
import HomePage from './components/Users/HomePage'
import UserList from './components/Users/UserList'
import NewForm from './components/Users/NewForm'
import User from './components/Users/User'
import UserEditDelete from './components/Users/UserEditDelete'
import PhotographersList from './components/PhotoGraphers/PhotographersList'
import PhotoGallery from './components/PhotoGallery/PhotoGallery'
import Nav from './components/styled_components/Nav'


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
    const response = await axios.post(`/api/users`, user)
    const newUser = response.data
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
   
    const DataOfUsers = () => (<UserList MyUsers={this.state.users} />)
    const makeNewUser = () => (<NewForm createUser={this.createUser} users={this.state.users}/>)
    const editUser = (props) => (<UserEditDelete  users={this.state.users} {...props} />)
    const DataOfPhotographers = () => (<PhotographersList MyPhotographers={this.state.photographers} />)
    const allOfThePhotos = () => (<PhotoGallery MyPictures={this.state.photos} />)

    return (
      <div>
        <Nav/>
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
        </Switch>
      </Router>
      </div>
    )
  }
}

export default App;
