const defaultState = [

]
function usersReducer(state = defaultState, action)

{
  switch (action.type) {
    
 
    case "GET_PHOTOGRAPHERS":
    console.log('getting photographers', action.type)
      return [...action.photographersFromDatabase]

    // case "CREATE_PHOTOGRAPHER":
    //   return [...state, action.newUserData];

    default:
      return state;
  }
}



export default usersReducer;
