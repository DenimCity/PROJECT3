import React, {Component} from 'react'
import {connect} from "react-redux";
import {push} from "react-router-redux";
import {getPhotographers} from "../../actions/thunk.actions";
import {Link} from 'react-router-dom'
import Photographer from './Photographer'
import styled from 'styled-components'
import {Button, TitleContainer} from '../styled_components/BasicStyles'

import NavBar from '../styled_components/NavBar'

class PhotographersList extends Component {

  componentWillMount() {
    this
      .props
      .getPhotographers();
    console.log('UsersList', this.props)
  }

  render() {
    return (
      <div>
        <TitleContainer>
          <h1>
             View our instagram Content Creators for the month
          </h1>
        </TitleContainer>

        <Card>
          {this
            .props
            .photographers
            .map((photographer, i) => {
              return (
                <PhotographerCard key={i} id={photographer._id}>

                  <PhotoContainer>
                    <img src={photographer.photo} alt=""/>
                  </PhotoContainer>
                  <InfoCard>
                    <div>
                      <h1>{photographer.firstName}</h1>
                    </div>
                    <div>
                      <h1>
                        {photographer.lastName}</h1>
                    </div>
                    <div>
                      <h2>Instagram</h2>
                    </div>

                    <div>
                      <h2>@{photographer.instagram}</h2>
                    </div>

                    <div>
                      <a href={photographer.website} target="blank">View Site</a>
                    </div>
                  </InfoCard>
                </PhotographerCard>
              )
            })}
        </Card>
        <div>
          <Link to="/photographers/photogallery">
          <Button>Photogallery</Button>
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {photographers: state.photographers};
};
export default connect(mapStateToProps, {push, getPhotographers})(PhotographersList);




const Card = styled.div `
display:flex;
flex-wrap:wrap;
justify-content:center;
border: 1px black;


`
const PhotoContainer = styled.div `

width: 22rem;

img {
  width:25vw;
  height: 17vh;
  box-shadow: 15px 6px 8px 5px rgba(0,0,0,0.2);
  @media (max-width: 669px) {
  width:100%;
  height:100%;
}
}
`

const InfoCard = styled.div `
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
border: 1px solid transparent;
width: 25vw;
box-shadow: 15px 6px 8px 5px rgba(0,0,0,0.2);
border-radius: 5px;
padding-bottom:1vh;
@media (max-width: 669px) {
  width:100%;
}
`

const PhotographerCard = styled.div `
display:flex;
justify-content:center;
flex-direction:column;
margin:1vw;

`
