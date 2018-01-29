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
)


  }

}

export default Photo

const Picture = styled.img`
    width: 100px;
    height:100%;
    border-radius:12px;
    padding:9;
 
@media screen and (max-width:650px){
  width: 75%;
    height:35%;
}
`

const PictureWrapper = styled.div`
height:200px;
width:200px;
overflow:hidden;
/* /* @media screen and (max-width:650px){
  height:100px;
width:147px; */
} */
  
`