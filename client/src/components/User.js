import React, { Component } from 'react'



class User extends Component {

  render(){


    return(
      <div>
        <div>
          <img src={this.props.photo} alt="pic of user"/>
        </div>
        <div>First Name:{this.props.firstName}</div>
        <div>Last Name:{this.props.lastName}</div>
        <div>Instagram:{this.props.instagram}</div>
        <div>Go to Camera:{this.props.camera}</div>
        <div>Favorite Lens:{this.props.lens}</div>
        </div>
      
    )
  }
}





export default User