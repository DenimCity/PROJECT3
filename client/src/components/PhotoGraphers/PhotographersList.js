import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Photographer from './Photographer'
import styled from 'styled-components'


class PhotographersList extends Component {

  render() {

    const cameraPeople = this
      .props
      .MyPhotographers
      .map((photographer, index) => {
        return (<Photographer
          key={index}
          firstName={photographer.firstName}
          lastName={photographer.lastName}
          website={photographer.website}
          photo={photographer.photo}
          instagram={photographer.instagram}
          id={photographer._id}/>)
      })

    return (
      <PhotographerContainer>
        <PhotographerWrapper>
          {cameraPeople}
        </PhotographerWrapper>
      </PhotographerContainer>
    )
  }

}

export default PhotographersList
const PhotographerWrapper = styled.div `
display:grid;
grid-template-columns:90% ;

`

const PhotographerContainer = styled.div `
display:flex;
justify-content:center;

`