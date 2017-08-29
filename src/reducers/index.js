import { combineReducers } from 'redux'
import TwitchReducer from './reducer_twitch'

export default combineReducers({
  twitch: TwitchReducer
})

