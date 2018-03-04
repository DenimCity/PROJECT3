import React, {Component} from 'react'
import styled from 'styled-components'
class Photographer extends Component {
  render() {
const photographer = this.props
    return (
      <div>
        <ImageContainer>
          <Picture src={photographer.photo} alt=""/>
        </ImageContainer>
        <InfoContainer>
          <div>First Name: {photographer.firstName}</div>
          <div>Last Name: {photographer.lastName}</div>
          <div>Instagram: @{photographer.instagram}</div>
          <a href={photographer.website} target="blank">Website</a>
        </InfoContainer>
      </div>
    )
  }

}

export default Photographer

const ImageContainer = styled.div `
width: 500px;
height:200px;
@media screen and (max-width:700px){
width:100%;
} 
`
const Picture = styled.img `
width:100%;
height:100%;
`

const InfoContainer = styled.div `

    display: flex;
    align-items: center;
    flex-direction:column;

`
