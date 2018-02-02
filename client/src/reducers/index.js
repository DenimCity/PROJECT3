import {routerReducer as router} from 'react-router-redux' // we need this for react-router
import {combineReducers} from 'redux'
import users from './usersReducer'



// Combine all reducers
const rootReducer = combineReducers({users, router})

export default rootReducer