import axios from 'axios'
import {
  FETCH_USERS,
  FETCH_CHANNEL_STATUS
} from './types'

const CLIENT_ID   = 'eyds7nq10ryxsahossrwpey6w6l3g4'
const ROOT_URL    = 'https://api.twitch.tv/kraken'
const CHANNELS    = ['ESL_SC2', 'OgamingSC2', 'cretetion', 'freecodecamp', 'storbeck', 'habathcx', 'RobotCaleb', 'noobs2ninjas']

const axiosInstance = axios.create({
  baseURL: ROOT_URL,
  timeout: 1000,
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': CLIENT_ID
  }
})

export const fetchUsers = () => {
  const concatenatedChannels = CHANNELS.join(',')
  const response = axiosInstance.get(`/users?login=${concatenatedChannels}`)

  return {
    type: FETCH_USERS,
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