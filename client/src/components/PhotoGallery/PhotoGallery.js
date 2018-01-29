import React, {Component} from 'react'
import Photo from './Photo'
import NavBar from '../styled_components/NavBar'
import NavLinkWrapper from '../styled_components/NavLinkWrapper'
import {Link} from 'react-router-dom'
import styled from 'styled-components'


class PhotoGallery extends Component {

  render() {

    const Gallery = this.props.MyPictures.map((photo, index) => {
        return (<Photo key={index} 
          image={photo.img} 
          id={photo._id}/>)

      })

    return (
      <div>
      <NavBar>
 <NavLinkWrapper>
   <Link to="/">Home</Link>
   <Link to="/user">Users</Link>
   <Link to="/photographers">Photographers</Link>
   <Link to="">Photo Gallery</Link>
 </NavLinkWrapper>
</NavBar>
      <div>
        <PhotoWrapperContainer>
        <PhotoWrapper>{Gallery}</PhotoWrapper>
        </PhotoWrapperContainer>
      </div>
      </div>
    )
  }

}

export default PhotoGallery

const PhotoWrapper = styled.div`

display:grid;
grid-template-columns:33% 33% 33%;

`

const PhotoWrapperContainer = styled.div`
display:flex;
justify-content:center;

margin: 105px;
`