import React, { Component } from 'react';
// import styled from "styled-components";
import { getUsers,editUserInDatabase, deleteUserFromDatabase } from "../../actions/thunk.actions";
import { connect } from "react-redux";

class UserEdit extends Component {
  componentWillMount(){
    this.getUsers()
  }
  handleChange = event => {
    const updateUser = {
      ...this.state.userBeingEdit
    };
    updateUser[event.target.name] = event.target.value;
    this.setState({ userBeingEdit: updateUser });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.userBeingEdit(this.state.userBeingEdit);
  };

  
  state = {
    userBeingEdit: {
      id: this.props.user._id,
      photo: this.props.user.photo,
      firstName: this.props.user.firstName,
      lastName: this.props.user.lastName,
      instagram: this.props.user.username,
      camera: this.props.user.camera,
      lens: this.props.user.lens
    }
    
  };

  render() {
    
    return (
      <div>
        <h1>balnlkdnflkdnldkfndfnd</h1>
        {/* <div>
          <h2>Update User</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              onChange={this.handleChange}
              name="photo"
              placeholder="DefaultPhoto"
              type="text"
              value={this.state.user.photo}
            />
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="firstName"
              placeholder="first name"
              type="text"
              value={this.state.user.firstName}
            />
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="lastName"
              placeholder="last name"
              type="text"
              value={this.state.user.lastName}
            />
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="instagram"
              placeholder="@instagram"
              type="text"
              value={this.state.user.instagram}
            />
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="camera"
              placeholder="Go to Camera"
              type="text"
              value={this.state.user.camera}
            />
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="lens"
              placeholder="go to lens"
              type="text"
              value={this.state.user.lens}
            />
          </div>

          <Submit type="submit">Submit</Submit>
        </form> */}
      </div>
    );
  }
}
export default connect(null, {getUsers,editUserInDatabase, deleteUserFromDatabase})(UserEdit);

// const Submit = styled.button`
//   background-color: green;
//   width: 50%;
//   height: 48px;
//   &&:hover {
//     background-color: goldenrod;
//   }
// `;

// const Delete = styled.button`
//   background-color: red;
//   width: 50%;
//   height: 48px;
//   &&:hover {
//     background-color: goldenrod;
//   }
// `;


// const Delete = styled.button`
// border: none;
//     outline: 0;
//     display: inline-block;
//     padding: 8px;
//     color: white;
//     background-color: red!important;
//     text-align: center;
//     cursor: pointer;
//     width: 100%;
//     font-size: 18px;
//     &:hover{
//       opacity: 0.7;
//       background-color:goldenrod;
//       padding:10px;
//       font-size:22;
//       color:white;
//     }
// `
