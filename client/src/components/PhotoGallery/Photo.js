import React, {Component} from 'react'
import styled from 'styled-components'

class Photo extends Component {

  render() {
    return (
      <div>
        <PictureWrapper>
          <Picture src={this.props.image} alt=""/>
        </PictureWrapper>
      </div>
    )
  }
}

export default Photo

const Picture = styled.img `
    width: 195px;
    height:100%;
    padding:9;
@media screen and (max-width:650px){
  width: 75px;
    height:50%;
    border-radius: 1rem;
}
`
const PictureWrapper = styled.div `
height: 12rem;
width: 7rem;
`