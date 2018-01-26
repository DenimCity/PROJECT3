import React, { Component } from 'react'
import axios from 'axios'


class UserEditDelete extends Component {

 

  state={
    users: [],
    photo:"",
    firstName:"",
    lastName:"",
    instagram:"",
    camera:"",
    lens:"",

    

  }



  updateState = () => {
    axios.get(`/api/users/${this.state.user._id}`, this.state.user)
    .then(res => {
      const userId = this.props.match.params.userId
      const users = this.props.users
      console.log(userId)

    })
    // FIND THE USER WITH THE ID IN THIS.PROPS.MATCH.PARAMS.
    // UPDATE TH STATE WITH THAT USER
    const userId = this.props.match.params.userId
    const users = this.props.users
    console.log(userId)
    this.setState((users))
  }
 
  userDatabase = () => {
    axios
      .get('/api/users')
      .then(response => {
        const users = response.data
        this.setState({users: users})
      })
  }


  componentWillMount() {
    this.updateState()


  }
  
  
  render(){
    


    return (
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
              value={this.state.photo}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="firstName"
              placeholder="first name"
              type="text"
              value={this.props.firstName}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="lastName"
              placeholder="last name"
              type="text"
              value={this.props.lastName}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="instagram"
              placeholder="@instagram"
              type="text"
              value={this.props.instagram}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="camera"
              placeholder="Go to Camera"
              type="text"
              value={this.props.camera}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="lens"
              placeholder="go to lens"
              type="text"
              value={this.props.lens}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="photos"
              placeholder="a picture of your most recent work"
              type="text"
              value={this.props.img1}/>
          </div>
          <button type="submit">
            Submit
          </button>
        </form>

        <button onClick="#">Delete</button>
        </div>
        </div>
    )

}


}

export default UserEditDelete