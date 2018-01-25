import React, {Component} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import{Redirect} from 'react-router-dom'
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
    // variable after we will use to capture values from the input field
    const attribute = event.target.name
    let value = event.target.value
    //update the value on the screen with what the user is typing 
    //copy that info and add it to 
    const newUser = {...this.state.newUser}
    newUser[attribute] = value
    
    this.setState({newUser})
  }

//this will handle the function once we press the submit button it
  handleSubmit = async (event) => {
    //the page will refresh automatically if you dont have this value set up
    event.preventDefault()
// soo after we capture all of our data
// 
    const response = await axios.post('/api/users', {
      'users':this.state.newUser
    })
    console.log(response)
    this.setState({redirectToUsersPage:true, newUserId:response.data._id})
  }

  addNewUser = (event) => {
    event.preventDefault()
    this.props.addNewUser(this.state.newUser)
    // console.log(this.state.newUser)
  }




  render() {
/// hopefully this if statement works
//this if statement is being used to redirect me to the user created
if (this.state.redirectToUsersPage){
  return <Redirect to={`users/${this.state.newUserId}`}/>
}


    return (

      <NewUserContainer>
        <div>
          <h2>Create New User</h2>
        </div>
        <form onSubmit={this.addNewUser}>
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

          <div>
            <input
              onChange={this.handleChange}
              name="photographers"
              placeholder="inspo first name"
              type="text"
              value={this.state.newUser.photographers.firstName}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="photographers"
              placeholder="inspo website"
              type="text"
              value={this.state.newUser.photographers.website}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="photographers"
              placeholder="insp picture"
              type="text"
              value={this.state.newUser.photographers.photo}/>
          </div>
          <button type="submit"> Submit </button>
          </form>
          {/* <div className="ButtonContainer">
            <NewUserButton>Submit</NewUserButton>
            <CancelButton>Cancel</CancelButton>
            <HomeButton>Home</HomeButton>
          </div> */}
       
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
const HomeButton = styled.button `
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
const input = styled.input `
color:red;

`