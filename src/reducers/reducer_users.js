import {
  FETCH_USERS
} from '../actions/types'

export default (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case FETCH_USERS:
      return action.payload.data.users
  }

  return state
}