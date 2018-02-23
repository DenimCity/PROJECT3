import React, { Component } from 'react'
import styled from 'styled-components'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'



const Edit = styled.button`
width: 58px;
height: 33px;
background-color:gold;
`

const Delete = styled.button`
background-color: red;
width: 58px;
height: 33px;
`
class Users extends Component {

  render(){
    // this.props.map((user, index) => {
    //   return (<User
    //     key={index}
    //     photo={user.photo}
    //     firstName={user.firstName}
    //     lastName={user.lastName}
    //     instagram={user.instagram}
    //     camera={user.camera}
    //     lens={user.lens}
    //     id={user._id}/>)
    //   })
    return(
    <div>
      hi from the user edit page page 
    </div>

     )
  }
}
export default Users


const UserWrapper = styled.div`
display:flex;
flex-direction:row;
font-size:15px;
align-items:center;
img {
  height:200px;
  width:190px;
  border:solid 1px black;
}
`
const InfoWrapper = styled.div`
border:solid 1px black;
height:200px;
`
 const LinkWrapper = styled.div`
 display:flex;
 align-items:center;
 justify-content:center;
 flex-direction: row;
 margins: 2px 0 0 2px;
 
  a {
  margin: 2px 3px 4px 5px;
}
 `

 const Name = styled.div`
 height:15px;
 width:25px;
 background-color:green;
 cursor:pointer;

 &:hover{
background-color:gold;
 }
 `

