import React, {Component} from 'react'
import styled from 'styled-components'
import {Redirect, Link} from 'react-router-dom'
import NavBar from '../styled_components/NavBar'
import NavLinkWrapper from '../styled_components/NavLinkWrapper'




class NewForm extends Component {

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
<div>
      <NavBar>
<NavLinkWrapper>
  <Link to="/">Home</Link>
  <Link to="/user">Users</Link>
  <Link to="/photographers">Photographers</Link>
  <Link to="/photogallery">Photo Gallery</Link>
</NavLinkWrapper>
</NavBar> 


      <NewUserContainer>
        <div>
          <h2>Create New User</h2>
        </div>
        <Container>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              onChange={this.handleChange}
              name="photo"
              placeholder="DefaultPhoto"
              type="text" required
              value={this.state.newUser.photo}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="firstName"
              placeholder="first name"
              type="text" required
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
         
          <button type="submit">
            Submit
          </button>
        </form>
</Container>

      </NewUserContainer>
      </div>
    )
  }
}

export default NewForm

const NewUserContainer = styled.div `
background-image: url(https://i.imgur.com/CBWEmLR.jpg);
background-position: center;
padding-right: 15px;
padding-left: 0px;
padding-top: 109px;
margin-right: auto;
margin-left: auto;
justify-content: center;
height:100%;

@media screen and (max-with:600px){
  padding-right: 9px;
padding-left: 9px;
padding-top: 9px;

}
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

const Container = styled.div`
justify-content:center;

form {
  font-size: 12px;
}

`
