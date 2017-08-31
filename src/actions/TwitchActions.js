import axios from 'axios'
import {
  FETCH_TWITCH_API,
  FETCH_CHANNEL_STATUS
} from './types'

const CLIENT_ID   = 'eyds7nq10ryxsahossrwpey6w6l3g4'
const ROOT_URL    = 'https://api.twitch.tv/kraken'
const CHANNELS    = ['freecodecamp', 'ESL_SC2', 'cretetion', 'habathcx', 'noobs2ninjas']

const axiosInstance = axios.create({
  baseURL: ROOT_URL,
  timeout: 1000,
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': CLIENT_ID
  }
})

export const fetchTwitch = () => {
  const concatenatedChannels = CHANNELS.join(',')
  const response = axiosInstance.get(`/users?login=${concatenatedChannels}`)

  return {
    type: FETCH_TWITCH_API,
    payload: response
  }
}

export const fetchChannelStatus = (userIds) => {
  const concatenatedIds = userIds.join(',');
  const response = axiosInstance.get(`/streams/?channel=${concatenatedIds}`)

  return {
    type: FETCH_CHANNEL_STATUS,
    payload: response
  }
}