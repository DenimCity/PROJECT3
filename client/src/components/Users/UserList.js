import React, {Component} from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import {push} from "react-router-redux";
import {Button, ButtonContainer, TitleContainer} from '../styled_components/BasicStyles'
import {getUsers, deleteUserFromDatabase} from "../../actions/thunk.actions";
import {Link} from 'react-router-dom'
import User from './User'

class UserList extends Component {

  componentWillMount() {
    this
      .props
      .getUsers();

  }

  
  render() {
    return (
      <div>
        <TitleContainer>
          <h1>New Photographer Showcase</h1>
        </TitleContainer>
        <ButtonContainer>
          <Link to="/new">
          <Button>Add New User</Button>
          </Link>
        </ButtonContainer>

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

// https://learn.co/lessons/map-state-to-props-readme
const mapStateToProps = state => {
  console.log('state', state );
  return {users: state.users};
};
export default connect(mapStateToProps, {push, getUsers, deleteUserFromDatabase})(UserList);

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




