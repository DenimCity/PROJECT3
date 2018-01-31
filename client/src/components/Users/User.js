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
<Link to={`/users/${this.props.id}`}>
<img src={this.props.photo} alt={this.props.firstName}/>
</Link>
</ImageContainer>
<UserDescriptionContainer>
<p>First Name: {this.props.firstName} </p>
<p>Last Name:  {this.props.lastName}</p>
<p>Instagram: {this.props.instagram} </p>
<p>Go To Camera: {this.props.camera} </p>
<p>Got to Lens: {this.props.lens} </p>

</UserDescriptionContainer>
</ProfileContainer>
      
      </UserProfileCardContainer>
</div>
  )}}

export default User



const UserProfileCardContainer = styled.div`
display:flex;
`
const ProfileContainer = styled.div`
/* display:flex; */
/* flex-direction:column; */
`
const ImageContainer = styled.div`
img {
  width:200px;
  @media screen and (max-width:700px){
width:100px
  
}
}

@media screen and (max-width:700px){


}
`

const UserDescriptionContainer = styled.div`
/* font-size:12px; */
display:flex;
flex-direction:column;
align-content:center
flex-wrap:wrap;
p{
  font-size:12px;
  @media screen and (max-width:700px){
font-size: 8px;

} 
}

`