import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import {Button, TitleContainer} from '../styled_components/BasicStyles'
class PhotoGallery extends Component {

  state = {
    photos: []

  }

  getPhotos = () => {
    console.log('gett photos');
    axios
      .get(`/api/photos`)
      .then(res => {
        const photos = res.data
        console.log('the data of all the photos', photos)
        this.setState({photos})
      })
  }

  componentWillMount = () => {
    this.getPhotos()
  }

  render() {

    const Gallery = this
      .state
      .photos
      .map((photo, i) => {
        return (
          <ImageContainer key={i} id={photo._id}>
            <img src={photo.img} alt=""/>
          </ImageContainer>
        )
      })
    return (
      <PageContainer>
        <TitleContainer>
          Photograhers PhotoGallery
        </TitleContainer>
        <br/>
        <br/>
        <PhotoContainer>
          {Gallery}
        </PhotoContainer>
      </PageContainer>
    )
  }
}



export default PhotoGallery

const PhotoContainer = styled.div `
display: flex;
flex-wrap:wrap;
justify-content: center;
`

const PageContainer = styled.div `
display:flex;
justify-content:center;
flex-direction:column;
`

const ImageContainer = styled.div `
width: 22rem;
margin-right: 2rem;
img {
  width: 100%;
    border-radius: 2rem;
    height: 90%;
    box-shadow: 4px 3px 1rem 3px;
  @media (max-width:669){
    height: 30vh;
  }
}

`
