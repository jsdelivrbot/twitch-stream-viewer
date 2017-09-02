import { combineReducers } from 'redux'
import users from './reducer_users'
import streams from './reducer_streams'

export default combineReducers({
  users,
  streams
})

