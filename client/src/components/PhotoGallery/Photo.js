import React, { Component } from 'react'
import styled from 'styled-components'

class Photo extends Component {


  render() {


return(

  <div>

<PictureWrapper>
  <Picture src={this.props.image} alt=""/>
</PictureWrapper>

  </div>
)


  }

}

export default Photo

const Picture = styled.img`
    width: 100%;
    height:100%;

    @media screen and (min-with:750){

/* width:30%;
height:30% */
} 
`

const PictureWrapper = styled.div`
height:200px;
width:200px;
overflow:hidden;

  
`