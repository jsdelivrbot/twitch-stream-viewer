import axios from 'axios'
import { FETCH_TWITCH_API } from './types'

const TWITCH_API  = 'eyds7nq10ryxsahossrwpey6w6l3g4'
const ROOT_URL    = 'https://api.twitch.tv/kraken'
const CLIENT_ID   = 'eyds7nq10ryxsahossrwpey6w6l3g4'

export const fetchTwitch = () => {
  let axiosInstance = axios.create({
    baseURL: ROOT_URL,
    timeout: 1000,
    headers: {
      Accept: 'application/vnd.twitchtv.v5+json',
      'Client-ID': CLIENT_ID
    }
  })

  const response = axiosInstance.get('/users?login=freecodecamp,ESL_SC2,cretetion,habathcx,noobs2ninjas')

  return {
    type: FETCH_TWITCH_API,
    payload: response
  }
}