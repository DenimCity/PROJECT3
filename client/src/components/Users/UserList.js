import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { getUserRoute } from "../../actions/thunk.actions";
import User from "./User";

class UserList extends Component {
  componentWillMount() {
    this.props.getUserRoute();
  }
  render() {
    return (
      <Wrapper>
        <CardWrapperContainer>
          {this.props.users.map((user, i) => {
            return (
              <CardWrapper key={i} id={user._id}>
                <Card>
                  <PictureContainer>
                    <img src={user.photo} alt={user.firstName} />
                  </PictureContainer>
                  <h1>
                    {user.firstName} {user.lastName}{" "}
                  </h1>
                  <p>Instagram: {user.instagram}</p>
                  <p>Camera Preference: {user.camera}</p>
                  <p>Lens Of Choice: {user.lens}</p>
                  <p>
                    <button>Edit</button>
                    <Delete>Delete</Delete>
                  </p>
                </Card>
              </CardWrapper>
            );
          })}
        </CardWrapperContainer>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return { users: state.users };
};
export default connect(mapStateToProps, { push, getUserRoute })(UserList);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const CardWrapperContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: safe;
  padding-top: 7rem;
  width: 75vw;
`;
const Card = styled.div`
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

const Delete = styled.button`
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
      color:black;
`
const CardWrapper = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
`;
const PictureContainer = styled.div`
  width: 22rem;
`;
