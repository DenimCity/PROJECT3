import React, {Component} from 'react'
import styled from 'styled-components'
class Photographer extends Component {
  render() {

    return (
      <div>
        <div>
          <ImageContainer>
            <Picture src={this.props.photo} alt=""/>
            </ImageContainer>
            <div>First Name: {this.props.firstName}</div>
        <div>Last Name: {this.props.lastName}</div>
        <div>Instagram:  @{this.props.instagram}</div>
        <div>Website: {this.props.website}</div>
        </div>
      </div>
    )
  }

}

export default Photographer

const ImageContainer = styled.div`
width: 500px;
height:200px;
`

const Picture = styled.img`
width:100%;
height:100%;
`

