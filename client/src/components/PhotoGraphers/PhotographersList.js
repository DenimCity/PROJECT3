import React, {Component} from 'react'
import NavBar from '../styled_components/NavBar'
import NavLinkWrapper from '../styled_components/NavLinkWrapper'
import {Link} from 'react-router-dom'
import Photographer from './Photographer'





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
   <Link to="/photographers/new">Create A Photographer</Link>
   <Link to="/user">Users</Link>
   <Link to="">Photo Gallery</Link>
 </NavLinkWrapper>
</NavBar> 
<h1>Photographers List</h1>

<div>{cameraPeople}</div>

      </div>

    )

  }

}

export default PhotographersList
