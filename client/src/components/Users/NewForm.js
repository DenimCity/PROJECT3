import React, {Component} from 'react'
import styled from 'styled-components'
import {Redirect, Link} from 'react-router-dom'
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { sendNewUserToDatabase } from "../../actions/thunk.actions";



class NewForm extends Component {

state = {
  newUser:[],
  redirect:false
}
  handleChange = event => {
    const attributeName = event.target.name;
    const  attributeValue = event.target.value;
    const newUser = {...this.state.newUser}
    newUser[attributeName] = attributeValue
    this.setState({newUser})
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.sendNewUserToDatabase(this.state.newUser)
    this.setState({redirect:true})
  }
  render() {
   if (this.state.redirect){
     return <Redirect to="/users"/>
   }
    return (
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
              placeholder="Paste photo link"
              type="text" 
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
         
          <Submit type="submit">
            Submit
          </Submit>
          <Link to="/users">
          <Cancel>Cancel</Cancel>
          </Link>
        </form>
</Container>
      </NewUserContainer>
      
      
    );
  }
}

const mapStateToProps = state => {
  return { users: state.users };
};
export default connect(mapStateToProps, { push, sendNewUserToDatabase })(NewForm);


const Submit = styled.button`
  width: 100%;
  height: 33px;
  background-color: green;
`;
const Cancel = styled.button`
  background-color: goldenrod;
  width: 100%;
  height: 33px;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
`;

const NewUserContainer = styled.div`
  background-position: center;

  justify-content: center;
  height: 100%;

  h2 {
    font-size: 30px;
    margin-top: 20px;
    margin-bottom: 10px;
    font-weight: 500;
  }
  .ButtonContainer {
    display: flex;
    color: white;
  }

  input[type="text"] {
    font-size: 1rem;
    text-align: center;
    border: double 1px;
    border-radius: 8px;
    margin-bottom: 20px;
    height: 36px;
    width: 25rem;

    &:hover {
      border: 1px solid goldenrod;
      color: black;
      font-size: 12px;
      cursor: pointer;
    }
  }
`

const Container = styled.div`
  justify-content: center;
  display: flex;

  form {
    font-size: 12px;
  }
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns:auto auto;
  grid-template-columns: 
`
