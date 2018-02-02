import {routerReducer as router} from 'react-router-redux' // we need this for react-router
import {combineReducers} from 'redux'
import users from './usersReducer'


// this hands all the routes and switched that 
import {routerReducer as router} from 'react-router-redux'

// Combine all reducers
const rootReducer = combineReducers({users, router})

export default rootReducer