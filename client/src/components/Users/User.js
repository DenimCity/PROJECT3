import React, {  Component} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

class User extends Component {
render() {
  return(
    <div>

<UserProfileCardContainer>
<ProfileContainer>
<ImageContainer>
<Link to={`/users/${this.props.id}`}><img src={this.props.photo} alt={this.props.firstName}/>
</Link>
</ImageContainer>
<UserDescriptionContainer>
<div>First Name: {this.props.firstName} </div>
<div>Last Name:  {this.props.lastName}</div>
<div>Instagram: {this.props.instagram} </div>
<div>Go To Camera{this.props.camera} </div>
<div>Got to Lens{this.props.lens} </div>

</UserDescriptionContainer>
</ProfileContainer>


      <div className="firstNameContainer">
      
      
      
      </div>
      
      </UserProfileCardContainer>
</div>
  )}}

export default User



const UserProfileCardContainer = styled.div`
display:flex;
`
const ProfileContainer = styled.div`
display:flex;
/* flex-direction:column; */
`
const ImageContainer = styled.div`
/* display:flex;
flex-direction: column;
width:100px;
height:100px; */
img {
  width:200px;
}
`

const UserDescriptionContainer = styled.div`


`