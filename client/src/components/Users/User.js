import React, { Component } from "react";
import styled from "styled-components";
import { editUserInDatabase, getUser} from "../../actions/thunk.actions";
import { connect } from "react-redux";

class User extends Component {
  state = {
    userBeingEdited: {
      
    }
    
  };
  
  handleChange = (event) => {
    const updateUser = {
      ...this.state.userBeingEdited
    }
    const inputField = event.target.name
    const inputValue = event.target.value

    updateUser[inputField] = inputValue;
    this.setState({userBeingEdited:updateUser});
  };
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.editUserInDatabase(this.state.userBeingEdited)  
};
  
  render() {
    return (
      <div>

       <div>
          <h2>Update User  Page</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              onChange={this.handleChange}
              name="photo"
              placeholder="DefaultPhoto"
              type="text"
              value={this.state.photo}
            />
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="firstName"
              placeholder="first name"
              type="text"
              value={this.state.firstName}
            />
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="lastName"
              placeholder="last name"
              type="text"
              value={this.props.lastName}
            />
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="instagram"
              placeholder="@instagram"
              type="text"
              value={this.props.instagram}
            />
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="camera"
              placeholder="Go to Camera"
              type="text"
              value={this.props.camera}
            />
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="lens"
              placeholder="go to lens"
              type="text"
              value={this.props.lens}
            />
          </div>

         <Submit onClick={() => this.props.editUserInDatabase(this.props.match.params.userId)}>Submit</Submit>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { user: state.user }
}
export default connect(mapStateToProps, {editUserInDatabase})(User);

const Submit = styled.button`
  background-color: green;
  width: 50%;
  height: 48px;
  &&:hover {
    background-color: goldenrod;
  }
`

