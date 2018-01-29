import React, {Component} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

class UserEditDelete extends Component {

  state = {
    user: {
      photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      firstName: "",
      lastName: "",
      instagram: "",
      camera: "",
      lens: "",
      redirect:false,
      isStateNotSet: true
    }
  }
  handleChange = (event) => {
    const updateUser = {
        ...this.state.user
    }
    updateUser[event.target.name] = event.target.value
    this.setState({user: updateUser})
}

updateUser = (user) => {
  axios.patch(`/api/users/${this.props.match.params.userId}`, this.state.user)
  
  .then(res => ({user}))
  .catch((error)=>{
      console.log ("ERROR bob")
    })}

handleSubmit = (event) => {
  event.preventDefault()
  window.location.reload()
  this.updateUser()
  
  
  this.setState({redirect:true})
}



deleteUser =  (userId) => {
  console.log("about to delete a user from the app.js")
  axios.delete(`/api/users/${this.state.user._id}/delete`)
  window.location.reload()
}

  updateCurrentState = () => {
  axios.get(`/api/users/${this.props.match.params.userId}`, this.state.user)
  .then(response => {
  this.setState({user: response.data, isStateNotSet: false })})
  
  .catch((error) => {
  console.log(error)})
  }

  componentWillMount() {
    this.updateCurrentState()
  }

  render() {
    if (this.state.redirect){
      return <Redirect to="/user"/>
    }
    return (
      this.state.isStateNotSet ? <div></div> : 
      <div>
        <div>
          <div>
            <h2>Update User</h2>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                onChange={this.handleChange}
                name="photo"
                placeholder="DefaultPhoto"
                type="text"
                value={this.state.user.photo}/>
            </div>
            <div>
              <input
                onChange={this.handleChange}
                name="firstName"
                placeholder="first name"
                type="text"
                value={this.state.user.firstName}/>
            </div>
            <div>
              <input
                onChange={this.handleChange}
                name="lastName"
                placeholder="last name"
                type="text"
                value={this.state.user.lastName}/>
            </div>
            <div>
              <input
                onChange={this.handleChange}
                name="instagram"
                placeholder="@instagram"
                type="text"
                value={this.state.user.instagram}/>
            </div>
            <div>
              <input
                onChange={this.handleChange}
                name="camera"
                placeholder="Go to Camera"
                type="text"
                value={this.state.user.camera}/>
            </div>
            <div>
              <input
                onChange={this.handleChange}
                name="lens"
                placeholder="go to lens"
                type="text"
                value={this.state.user.lens}/>
            </div>
          
            <button type="submit">
              Submit
            </button>
            <button onClick={this.deleteUser}>Delete</button>
          </form>
        </div>
      </div>
    )
  }
}

export default UserEditDelete