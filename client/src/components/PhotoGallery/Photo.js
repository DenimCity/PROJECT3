import React, { Component } from 'react'
import styled from 'styled-components'


class Photo extends Component {

  render() {

return(

  <div>

<PictureWrapper>
  <div>
  <Picture src={this.props.image} alt=""/>
  </div>
</PictureWrapper>

  </div>
) }}

export default Photo

const Picture = styled.img`
    width: 195px;
    height:100%;
    
    padding:9;
 
@media screen and (max-width:650px){
  width: 75px;
    height:50%;
    border-radius:0px;
}
`
const PictureWrapper = styled.div`
height:200px;
width:200px;
overflow:hidden;
`