import {routerReducer as router} from 'react-router-redux' // we need this for react-router
import {combineReducers} from 'redux'
import users from './usersReducer'
import photographers from './photographersReducer'


// Combine all reducers
const rootReducer = combineReducers({users, photographers, router})

export default rootReducer