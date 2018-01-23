import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import axios from 'axios'





class User extends Component {
  //this grabs the data sent over from sever
  //responds to when the browser get the /api/users call
  
  
  async componentWillMount(){
    const response = await axios.get('/api/users')
  }



render(){
  return(

<h1>Here fro the users page </h1>

  )
}



}


export default User