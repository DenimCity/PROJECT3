function userReducer(state = [
  {
    users: []
  }
], action) {
  switch (action.type) {
    case 'GET_USERS':
      return [...action.userDataBase]

    case 'CREATE_USER':
      return [...state.action]

    case 'EDIT_USER':
      return updateObjectInArray(state, action)

    case 'DELETE_USER':
      return state.filter(user => user._id !== action.userToDeleteId)

    default:
      return state
  }
}
function updateObjectInArray(array, action) {
  return array.map((user) => {
    if (user._id !== action.editUserData.id) {
      return user
    }
    return {
      ...user,
      ...action.editedUserData
    }
  })
}

export default userReducer