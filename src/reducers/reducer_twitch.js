import {
  FETCH_TWITCH_API
} from '../actions/types'

export default (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case FETCH_TWITCH_API:
      return action.payload.data.users
  }

  return state
}