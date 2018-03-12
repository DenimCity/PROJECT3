import React, {Component} from 'react'
import {connect} from "react-redux";
import {push} from "react-router-redux";
import {getPhotographers } from "../../actions/thunk.actions";
import {Link} from 'react-router-dom'
import Photographer from './Photographer'
import styled from 'styled-components'

import NavBar from '../styled_components/NavBar'

class PhotographersList extends Component {
  

  componentWillMount() {
    this
      .props
      .getPhotographers();
    console.log('UsersList', this.props)
  }
  render() {


    // const cameraPeople = this
    //   .props
    //   .MyPhotographers
    //   .map((photographer, index) => {
    //     return (<Photographer
    //       key={index}
    //       firstName={photographer.firstName}
    //       lastName={photographer.lastName}
    //       website={photographer.website}
    //       photo={photographer.photo}
    //       instagram={photographer.instagram}
    //       id={photographer._id}/>)
    //   })

    return (
      <div>

        <h1>Here are a list of known photographers in the industry.</h1>
 hi from the photographers list page

{/* <PhotographerContainer>
<PhotographerWrapper>
{cameraPeople}
</PhotographerWrapper>
</PhotographerContainer> */}
      </div>

    )

  }

}


const mapStateToProps = state => {
  return {photographers: state.photographers};
};
export default connect(mapStateToProps, {push, getPhotographers})(PhotographersList);


const PhotographerWrapper = styled.div`
display:grid;
grid-template-columns:90% ;

`


const PhotographerContainer = styled.div`
display:flex;
justify-content:center;

`