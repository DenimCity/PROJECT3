function usersReducer(state = [], action)

{
  switch (action.type) {
    
 
    case "GET_USER":
    console.table('getting users ')
      return [
        {...state},
        ...action.usersFromDatabase
      ];

    case "CREATE_USER":
      return [...state, action.newUserData];

    case "EDIT_USER":
      return updateObjectInArray(state, action);

    case "DELETE_USER":
      return state.filter(user => user._id !== action.userToDeleteId);

    default:
      return state;
  }
}

function updateObjectInArray(array, action) {
  return array.map(user => {
    if (user._id !== action.editUserData.id) {
      return user;
    }
    return {
      ...user,
      ...action.editedUserData
    };
  });
}

export default usersReducer;