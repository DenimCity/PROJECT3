import React, {Component} from 'react'

class EditPhotographer extends Component {

  state = {
    photographers: {
      photo: 'http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png',
      firstName: "",
      lastName: "",
      website: "",
      isStateNotSet: true
    }
  }
  handleChange = (event) => {
    const updatePhotographer = {
      ...this.state.photographer
    }
    updatePhotographer[event.target.name] = event.target.value
    this.setState({photographer: updatePhotographer})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.deletePhotographer()
  }

  updateCurrentState = () => {
    axios
      .get(`api/photographers/${this.props.match.params.userId}`, this.state.photographer)
      .then(response => {
        this.setState({photographer: response.data, isStateNotSet: false})
      })
      .catch((error) => {
        console.log(error)
      })
  }

  deletePhotographer = async(userId) => {
    try {
      axios.delete(`/api/photographers/${photographer._id}`)
      const indexToDelete = this
        .state
        .photographers
        .indexOf(photographer)
      const currentPhotographer = [...this.state.photographers]
      currentPhotographer.splice(indexToDelete, 1)

      this.setState({photographers: currentPhotographer})
    } catch (err) {
      console.log(err)
    }
  }
  componentWillMount() {
    this.updateCurrentState()
  }

  render() {

    return (

      <div>
        <h2>Update Photographer</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              onChange={this.handleChange}
              name="photo"
              placeholder="DefaultPhoto"
              type="text"
              value={this.state.photographer.photo}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="firstName"
              placeholder="first name"
              type="text"
              value={this.state.photographer.firstName}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="lastName"
              placeholder="last name"
              type="text"
              value={this.state.photographer.lastName}/>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="website"
              placeholder="website"
              type="text"
              value={this.state.photographer.lastName}/>
          </div>

          <button onSubmit="readonly">
            Submit
          </button>
          <button onClick={this.deletePhotographer}>Delete</button>

        </form>

      </div>
    )
  }
}

export default EditPhotographer