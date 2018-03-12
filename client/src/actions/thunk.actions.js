import axios from 'axios'



// this function pushes to the users reducer in  folder
export function sendUsersToState(usersFromDatabase) {
  return {type:'GET_USERS', usersFromDatabase}

}

// /this function grabs all the users from the USER database and dispatches it to our 
export function getUsers(){
  return function (dispatch){
    return axios
      .get('/api/users')
      .then((response)=>{
        console.log("get users database from thunk file",response)
        dispatch(sendUsersToState(response.data))

      })
  }
}


//this the function that pushes it the action folder 
export function sendOneUserToState(userFromDatabase){
  return {type: 'GET_USER', userFromDatabase}
  // return {type: 'GET_USER', userFromDatabase.user}
}
//this function should grab one user
export function getUser(userId){
  return function (dispatch){
    return axios.get(`/api/users/${userId}`).then((response)=>{
    
      // console.log(`we have the one user from the api call thunk route, ${userId}, ${JSON.stringify(response.data)}`)
      dispatch(sendOneUserToState(response.data))
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
      console.log('the response of creating a user',response);
      dispatch(sendNewUserToState(response.data))
      console.log('the repsonse data looks like',response.data);
    })
  }
}




export function editUserToState(editUserData){
return {type:'EDIT_USER', editUserData}
}

export function editUserInDatabase(editUserInfo){
  return function(dispatch){
    return axios.patch(`/api/users/${editUserInfo.id}`, editUserInfo)
    // console.log(`from the thunk edit route, we have something here =>>> , ${editUserInfo.id}`)
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




////photographers 
export function sendPhotographersToState(photographersFromDatabase) {
  return {type:'GET_PHOTOGRAPHERS', photographersFromDatabase}

}

// /this function grabs all the users from the USER database and dispatches it to our 
export function getPhotographers(){
  return function (dispatch){
    return axios
      .get('/api/photographers')
      .then((response)=>{
        console.log("get photogaphers from server in thunk file",response)
        dispatch(sendPhotographersToState(response.data))

      })
  }
}