import React, {Component} from 'react'
import styled from 'styled-components'
import { AboveNavBar} from './HomePage'




class NewUserPage extends Component {

  //now we have to capture the state of a new user
  state = {
    newUser: {
      firstName: '',
      lastName: '',
      instagram: '',
      camera: '',
      lens: '',
      photo: '',
      photos: [],
      photographers: []
    }
  }

  //this function will handle the change the user makes types in the form
  handleChange = (event) => {
    // we need to assign the information they are typing in into a variable the
    // variable after we will use to capture
    const values = event.target.value

  }

  render() {

    return (
      
      <NewUserContainer>
        <div>
          <h2>Create New User</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              onChange={this.handleChange}
              value="photo"
              placeholder="upload photo"
              type="text"
              value={this.state.newUser.photo}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              value="firstName"
              placeholder="first name"
              type="text"
              value={this.state.newUser.firstName}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              value="lastName"
              placeholder="last name"
              type="text"
              value={this.state.newUser.lastName}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              value="instagram"
              placeholder="@instagram"
              type="text"
              value={this.state.newUser.instagram}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              value="camera"
              placeholder="Go to Camera"
              type="text"
              value={this.state.newUser.camera}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              value="lens"
              placeholder="go to lens"
              type="text"
              value={this.state.newUser.lens}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              value="photos"
              placeholder="upload one photo link"
              type="text"
              value={this.state.newUser.photos}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              value="photos"
              placeholder="upload one photo link"
              type="text"
              value={this.state.newUser.photos}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              value="photos"
              placeholder="upload one photo link"
              type="text"
              value={this.state.newUser.photos}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              value="photographers"
              placeholder="upload photographers"
              type="text"
              value={this.state.newUser.photographers}/>
          </div>

          <div className="ButtonContainer">
            <NewUserButton>Submit</NewUserButton>
            <CancelButton>Cancel</CancelButton>
            <HomeButton>Home</HomeButton>
          </div>
        </form>
      </NewUserContainer>

    )
  }
}

export default NewUserPage

const NewUserContainer = styled.div `
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    justify-content:center;
    display:grid;
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
`

const NewUserButton = styled.button `
cursor:pointer;
font-size: 12px;
background-color:black;
border-radius:12px;
height:30px;
width: 102px;
text-align:center;
color:white;

&:hover{
  background-color:green;
}
`
const HomeButton = styled.button`
cursor:pointer;
font-size: 12px;
background-color:black;
border-radius:12px;
height:30px;
width: 102px;
text-align:center;
color:white;

&:hover{
  background-color:goldenrod;
}

`

const CancelButton = styled.button `
cursor:pointer;
font-size:12px;
background-color:black;
border-radius:12px;
height:30px;
text-align:center;
color:white;
width: 102px;
&:hover{
  background-color:red;
}
`
const input = styled.input`
color:red;

`