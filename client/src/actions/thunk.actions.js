import axios from 'axios'

//this function pushes to the users reducer in  folder
export function sendUsersToState(userFromDataBase) {
  return {type:'GET_USERS',userFromDataBase}

}

///this function grabs the user database and dispatches it to our 
//export function
export function getUserRoute(){
  return function (dispatch){
    return axios
      .get('/api/users')
      .then((response)=>{
        dispatch(sendUsersToState(response.data))
      })
  }
}
//function exports out to the userReducer folder and //pushes the action
export function sendNewUserToState(newUserData){
return {type:'CREATE_USER', newUserData}
}

//we export the function to 
// this function post the user to the database
export function sendNewUserToDatabase(newUserInfo){
  return function (dispatch){
    return axios.post(`/api/users`, newUserInfo)
    .then((response)=>{
      dispatch(sendNewUserToState(response.data))
    })
  }
}

//this function
export function editUserToState(editUserData){
return {type:'EDIT_USER', editUserData}
}

export function editUserInDatabase(editUserInfo){
  return function(dispatch){
    return axios.patch(`/api/users/${editUserInfo.id}`, editUserInfo)
    .then((response)=> {
      dispatch(editUserToState(editUserInfo))
    })
  }
}

export function deleteUserFromState(userToDeleteId){
  return {type: 'DELETE_USER', userToDeleteId}
}

export function deleteUserFromDatabase(userToDeleteFromDatabase){
  return function (dispatch){
    return axios.delete(`/api/users/${userToDeleteFromDatabase._id}`)
    .then((response)=>{
      dispatch(deleteUserFromState(userToDeleteFromDatabase._id))
    })
  }
}












    
//       updateCurrentState = () => {
//       axios.get(`/api/users/${this.props.match.params.userId}`, this.state.user)
//       .then(response => {
//       this.setState({user: response.data, isStateNotSet: false })})
      
//       .catch((error) => {
//       console.log(error)})
//       }