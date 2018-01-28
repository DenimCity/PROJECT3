import React, {  Component} from 'react'
import {Link} from 'react-router-dom'


class User extends Component {
render() {
  return(
    <div>
      <div className="UserContainer">
      <div className="imageContainer">
      <img src={this.props.photo} alt={this.props.firstName}/>
      </div>
      <div className="firstNameContainer">
      <div>{this.props.firstName} {this.props.lastName}</div>
      <Link to={`/users/${this.props.id}`}>Update</Link>
      </div>
      </div>
      <img src={this.props.photos} alt="their most recent upload"/>
</div>
  )}}

export default User