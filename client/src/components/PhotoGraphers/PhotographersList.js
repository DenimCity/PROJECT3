import React, {Component} from 'react'
import NavBar from '../styled_components/NavBar'
import NavLinkWrapper from '../styled_components/NavLinkWrapper'
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
      <div>
 <NavBar>
 <NavLinkWrapper>
   <Link to="/">Home</Link>
   <Link to="/user">Users</Link>
   <Link to="/photogallery">Photo Gallery</Link>
 </NavLinkWrapper>
</NavBar> 

<PhotographerContainer>
<PhotographerWrapper>{cameraPeople}</PhotographerWrapper>
</PhotographerContainer>
      </div>

    )

  }

}

export default PhotographersList
const PhotographerWrapper = styled.div`
display:grid;
grid-template-columns:50% 50% ;

`


const PhotographerContainer = styled.div`
display:flex;
justify-content:center;

`