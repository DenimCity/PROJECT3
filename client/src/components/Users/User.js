import React, { Component } from "react";
import styled from "styled-components";
import { editUserInDatabase, getUser} from "../../actions/thunk.actions";
import { connect } from "react-redux";

class User extends Component {

  
  handleChange = (event) => {
    const updateUser = {
      ...this.props.value
    };
    updateUser[event.target.name] = event.target.value;
    this.setState({ });
  };
  
  handleSubmit = (event) => {
    event.preventDefault();  
};

componentWillMount(){
    this.props.getUser(this.props.match.params.userId)
    // console.log('i have the userID on the client side ', this.props.match.params.userId)
  }
  
  
  render() {

    //we ned the 
    const i = this.props.users
    // I have the user that match the params of the user match params
    // console.log('props from the user page is now in the render function', this.props.match.params.userId)

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
              value={this.props.match.params.photo}
            />
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="firstName"
              placeholder="first name"
              type="text"
              value={this.props.firstName}
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
export default connect(mapStateToProps, {getUser,editUserInDatabase,})(User);

const Submit = styled.button`
  background-color: green;
  width: 50%;
  height: 48px;
  &&:hover {
    background-color: goldenrod;
  }
`;

// const UserProfileCardContainer = styled.div`
//   display: flex;
// `
// const ProfileContainer = styled.div`
//   /* display:flex; */
//   /* flex-direction:column; */
// `
// const ImageContainer = styled.div`
//   img {
//     width: 200px;
//     @media screen and (max-width: 700px) {
//       width: 100px;
//     }
//   }

//   @media screen and (max-width: 700px) {
//   }
// `

// const UserDescriptionContainer = styled.div`
// /* font-size:12px; */
// display:flex;
// flex-direction:column;
// align-content:center;
// flex-wrap:wrap;
// p{
//   font-size:12px;
//   @media screen and (max-width:700px){
// font-size: 8px;

// } 
// }

// `
