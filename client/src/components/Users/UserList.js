import React, {Component} from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import {push} from "react-router-redux";
import {getUsers, getUser, deleteUserFromDatabase} from "../../actions/thunk.actions";
import {Link} from 'react-router-dom'
import User from './User'

class UserList extends Component {
  componentWillMount() {
    this
      .props
      .getUsers();
    console.log('UsersList', this.props)
  }
  render() {
    return (
      <div>
        <NewUserContainer>
          <Link to="/new">
          <Button>Add New User</Button>
          </Link>
        </NewUserContainer>

        <Wrapper>
          <CardWrapperContainer>
            {this
              .props
              .users
              .map((user, i) => {
                return (
                  <CardWrapper key={i} id={user._id}>
                    <Card>
                      <PictureContainer>
                        <img src={user.photo} alt={user.firstName}/>
                      </PictureContainer>
                      <h1>
                        {user.firstName} {user.lastName}</h1>
                      <p>Instagram: {user.instagram}</p>
                      <p>Camera Preference: {user.camera}</p>
                      <p>Lens Of Choice: {user.lens}</p>
                      <p></p>
                      <Delete onClick={() => this.props.deleteUserFromDatabase(user)}>Delete</Delete>
                    </Card>
                  </CardWrapper>
                );
              })}
          </CardWrapperContainer>
        </Wrapper>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {users: state.users};
};
export default connect(mapStateToProps, {push, getUsers, getUser, deleteUserFromDatabase})(UserList);

const Wrapper = styled.div `
  display: flex;
  justify-content: center;
`;
const CardWrapperContainer = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: safe;
  padding-top: 7rem;
  width: 75vw;
`;
const Card = styled.div `
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
width: 22rem;
height:97%;  
    text-align: center;
    margin:3px;
  img{
    width:100%;
    height:28rem;
  }
  button{
    border: none;
    outline: 0;
    display: inline-block;
    padding: 8px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
    &:hover{
      opacity: 0.7;
      background-color:goldenrod;
      padding:10px;
      font-size:22;
      color:black;
    }
`;

const Delete = styled.button `
border: none;
    outline: 0;
    display: inline-block;
    padding: 8px;
    color: white;
    background-color: red!important;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
    &:hover{
      opacity: 0.7;
      background-color:goldenrod;
      padding:10px;
      font-size:22;
      color:white;
    }
`
const CardWrapper = styled.div `
  color: black;
  display: flex;
  flex-direction: column;
`;
const PictureContainer = styled.div `
  width: 22rem;
`;

const NewUserContainer = styled.div `
display:flex;
justify-content:center;
align-items:center;
margin-top:3rem;
`

const Button = styled.button`
background: #3498db;
  background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
  background-image: -moz-linear-gradient(top, #3498db, #2980b9);
  background-image: -ms-linear-gradient(top, #3498db, #2980b9);
  background-image: -o-linear-gradient(top, #3498db, #2980b9);
  background-image: linear-gradient(to bottom, #3498db, #2980b9);
  -webkit-border-radius: 16;
  -moz-border-radius: 16;
  border-radius: 16px;
  -webkit-box-shadow: 4px 6px 7px #666666;
  -moz-box-shadow: 4px 6px 7px #666666;
  box-shadow: 4px 6px 7px #666666;
  font-family: Arial;
  color: #ffffff;
  font-size: 27px;
  padding: 9px 20px 10px 20px;
  border: solid #1f628d 2px;
  text-decoration: none;
  &:hover {
    background: #00f04c;
  text-decoration: none;
  }

`
