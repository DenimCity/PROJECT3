import React, { Component } from 'react'
import styled from 'styled-components'

class Photo extends Component {


  render() {


return(

  <div>

<div>
  <Picture src={this.props.image} alt=""/>
  <p></p>
</div>

  </div>
)


  }

}

export default Photo

const Picture = styled.img`
    width: 200px;


`