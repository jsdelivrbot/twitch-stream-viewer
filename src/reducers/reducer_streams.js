import {
  FETCH_CHANNEL_STATUS
} from '../actions/types'

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_CHANNEL_STATUS:
      return action.payload.data.streams
  }

  return state
}