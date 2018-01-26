import React, {Component} from 'react'
import axios from 'axios'

class UserEditDelete extends Component {

  state = {
    user: {
      photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      firstName: "",
      lastName: "",
      instagram: "",
      camera: "",
      lens: "",
      redirect:false,
      isStateNotSet: true
    }

  }
  handleChange = (event) => {
    const updateUser = {
        ...this.state.user
    }
    updateUser[event.target.name] = event.target.value
    this.setState({user: updateUser})
}

updateUser = () => {
  console.log ("from the edit function in UserView")
  axios.patch(`/api/users/${this.props.match.params.userId}`)
  
  .then(res => {
  const update = res.data
    console.log("i have the the date user to delete ", update)
    // this.props.updateUser()

    }).catch((error)=>{
      console.log ("ERROR bob")
    })}

handleSubmit = (event) => {
  event.preventDefault()
  this.updateUser()
  this.setState({redirect:true})
}

  updateCurrentState = () => {
    axios
      .get(`/api/users/${this.props.match.params.userId}`)
     
      .then(response => {
        this.setState({user: response.data, isStateNotSet: false })
        
      })
      .catch((error) => {
        console.log(error)
      })
  }

 

  componentWillMount() {
    this.updateCurrentState()

  }

  render() {
    
    
    return (
      this.state.isStateNotSet ? <div></div> : 

      <div>

        <div>
          <div>
            <h2>Update User</h2>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                onChange={this.handleChange}
                name="photo"
                placeholder="DefaultPhoto"
                type="text"
                value={this.state.user.photo}/>
            </div>
            <div>
              <input
                onChange={this.handleChange}
                name="firstName"
                placeholder="first name"
                type="text"
                value={this.state.user.firstName}/>
            </div>
            <div>
              <input
                onChange={this.handleChange}
                name="lastName"
                placeholder="last name"
                type="text"
                value={this.state.user.lastName}/>
            </div>
            <div>
              <input
                onChange={this.handleChange}
                name="instagram"
                placeholder="@instagram"
                type="text"
                value={this.state.user.instagram}/>
            </div>
            <div>
              <input
                onChange={this.handleChange}
                name="camera"
                placeholder="Go to Camera"
                type="text"
                value={this.state.user.camera}/>
            </div>
            <div>
              <input
                onChange={this.handleChange}
                name="lens"
                placeholder="go to lens"
                type="text"
                value={this.state.user.lens}/>
            </div>
            <div>
              <input
                onChange={this.handleChange}
                name="photos"
                placeholder="a picture of your most recent work"
                type="text"
                value={this.state.user.img1}/>
            </div>
            <button type="readonly">
              Submit
            </button>
          </form>
       
          
        </div>
      </div>
    )
  }
}

export default UserEditDelete