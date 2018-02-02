import axios from 'axios'

//this function pushes to the users reducer in  folder
export function sendUsersToState(userDataBase)
return {type:'GET_USERS',userDataBase}

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
export function sendUsersToState(newUserData){
return {type:'CREATE_USER', newUserData}
}

//we export the function to 
// this function post the user to the database
export function sendNewUserToDatabase(newUserInfo){
  return function (dispatch){
    return axios.post(`/api/users`, user)
    .then((response)=>{
      dispatch(sendNewUserToState(response.data))
    })
  }
}

//this function
export function editUserInDatabase(editUserInfo){
return {type:'EDIT_USER', editedUserData}
}

export function editUserInDatabase(editUserInfo){
  return function(dispatch){
    return axios.patch(`/api/users/${editUserInfo.id}`, editUserInfo)
    .then((response)=> {
      dispatch(editedUserToState(editUserInfo))
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