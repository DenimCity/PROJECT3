import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Photographer extends Component {
  render() {

    return (
      <div>
        <div>
          <div>
            <img src={this.props.photo} alt=""/>
            </div>
          
          <div></div>
        </div>
        <div>First Name: {this.props.firstName}</div>
        <div>Last Name: {this.props.lastName}</div>
        <div>Instagram:  @{this.props.instagram}</div>
        <div>Website: {this.props.website}</div>
      </div>
    )
  }

}

export default Photographer