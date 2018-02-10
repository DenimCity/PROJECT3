import React, {Component} from 'react'
import styled from 'styled-components'
import {Redirect, Link} from 'react-router-dom'
import {sendNewUserToDatabase} from '../../actions/thunk.actions'
import {connect} from 'react-redux' 



class NewForm extends Component {

state = {
  newUser:{},
  redirectToUserPage:false,
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
    alert('You have created a user' + this.state.newUser )
    this.props.sendNewUserToDatabase(this.state.newUser)
    // this.setState({
    //   newUser:{
    //     photo:"",
    //     firstName:"",
    //     lastName:"",
    //     instagram:"",
    //     camera:"",
    //     lens:"",
    //     redirectToUserPage:true
    //   }
      
    // })
    
  }
  render() {
   if (this.state.redirectToUserPage){
     return <Redirect to="/"/>
   }
    return (
<div>
<BigContainer>
      <NewUserContainer>
        <Title>
          <h2>Create New User</h2>
        </Title>
        <Container>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
            
              onChange={this.handleChange}
              name="photo"
              placeholder="https://i.imgur.com/G80lKgk.jpg"
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
         
          <Submit onClick={this.handleSubmit} type="submit">Submit</Submit>
          <Link to="/user">
          <Cancel>Cancel</Cancel>
          </Link>
        </form>
</Container>
      </NewUserContainer>

      </BigContainer>
      </div>
    )
  }
}

export default connect(null, {sendNewUserToDatabase})(NewForm)


const BigContainer = styled.div`
height:10px;

background-image: url(https://i.imgur.com/CBWEmLR.jpg);

`
const Submit = styled.button`
width: 59px;
height: 33px;
background-color:green;
`
const Cancel = styled.button`
background-color:goldenrod;
width: 59px;
height: 33px;
`
const Title = styled.div`
display:flex;
justify-content:center;
`

const NewUserContainer = styled.div `
background-position: center;

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
display:flex;

form {
  font-size: 12px;
}

`
