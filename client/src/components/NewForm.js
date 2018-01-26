import React, {Component} from 'react'
import styled from 'styled-components'
import {Redirect} from 'react-router-dom'




class NewUserPage extends Component {

state = {
  newUser:[],
  redirect:false
}
  //this function will handle the change the user makes types in the form
  handleChange = (event) => {
    // we need to assign the information they are typing in into a variable the
    // variable after we will use to capture values from the input field
    const attribute = event.target.name
    let val = event.target.value
    // update the value on the screen with what the user is typing copy that info
    // and add it to
    const newUser = {...this.state.newUser}
    newUser[attribute] = val

    this.setState({newUser})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createUser(this.state.newUser)
    this.setState({redirect:true})
  }

  render() {
   if (this.state.redirect){
     return <Redirect to="/user"/>
   }

    return (

      <NewUserContainer>
        <div>
          <h2>Create New User</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              onChange={this.handleChange}
              name="photo"
              placeholder="DefaultPhoto"
              type="text"
              value={this.state.newUser.photo}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="firstName"
              placeholder="first name"
              type="text"
              value={this.state.newUser.firstName}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="lastName"
              placeholder="last name"
              type="text"
              value={this.state.newUser.lastName}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="instagram"
              placeholder="@instagram"
              type="text"
              value={this.state.newUser.instagram}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="camera"
              placeholder="Go to Camera"
              type="text"
              value={this.state.newUser.camera}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="lens"
              placeholder="go to lens"
              type="text"
              value={this.state.newUser.lens}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="photos"
              placeholder="upload a photo"
              type="text"
              value={this.state.newUser.img1}/>
          </div>

          {/* <div>
            <input
              onChange={this.handleChange}
              name="photographers"
              placeholder="inspo first name"
              type="text"
              value={this.state.users.photographers.firstName}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="photographers"
              placeholder="inspo website"
              type="text"
              value={this.state.users.photographers.website}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="photographers"
              placeholder="insp picture"
              type="text"
              value={this.state.users.photographers.photo}/>
          </div> */}
          <button type="submit">
            Submit
          </button>
        </form>

      </NewUserContainer>

    )
  }
}

export default NewUserPage

const NewUserContainer = styled.div `
background-image: url(https://i.imgur.com/CBWEmLR.jpg);
background-position: center;
padding-right: 15px;
padding-left: 0px;
padding-top: 109px;
margin-right: auto;
margin-left: auto;
justify-content: center;
 h2 {
   font-size:30px;
   margin-top:20px;
   margin-bottom:10px;
   font-weight:500;
   
 }

 .ButtonContainer{
   display:flex;
color:white;
 }
 input[type="text"] {
    border: solid 1px;
}
`

