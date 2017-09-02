import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  fetchUsers,
  fetchChannelStatus
} from '../actions/TwitchActions'

class App extends Component {
  constructor(props) {
    super(props)
    this.getStreamStatus = this.getStreamStatus.bind(this)
    this.renderTwitchUser = this.renderTwitchUser.bind(this)
  }

  componentWillMount() {
    this.props.fetchUsers()
  }

  componentDidUpdate() {
    if (this.props.users && this.props.streams.length === 0)
      this.props.fetchChannelStatus(this.props.users.map(user => user._id))
  }

  render() {
    if (!this.props.users) {
      return (
        <div className="row">
          <div className="col-xs-12 text-xs-center">
            <i className="fa fa-spinner fa-spin fa-4x" aria-hidden="true" />
          </div>
        </div>
      )
    }

    return (
      <div className="row">
        <div className="col-xs-12 col-md-8 col-centered">
          <ul className="twitch_list">
            {this.props.users.map(this.renderTwitchUser)}
          </ul>
        </div>
      </div>
    )
  }

  getStreamStatus(userId) {
    if (this.props.streams.length > 0) {
      const status = this.props.streams.find(stream => stream.channel._id == userId)
      if (status) return <p className="online-status pull-right"><a href={`https://www.twitch.tv/${status.channel['display_name']}`} target="_blank">Online!</a></p>
      return <p className="offline-status pull-right">Offline</p>
    } else {
      return <p className="offline-status pull-right">Offline</p>
    }
  }

  renderTwitchUser(user) {
    return (
      <li key={user['display_name']}>
        <div className="row">
          <div className="image-container col-md-3">
            <img className="img-fluid center-block" src={user['logo']} />
          </div>
          <div className="col-md-3">
            <h3 className="user-name text-xs-center text-md-left">{user['display_name']}</h3>
          </div>
          <div className="col-md-3">
            {this.getStreamStatus(user._id)}
          </div>
        </div>
      </li>
    )
  }
}

const mapStateToProps = ({ users, streams }) => {
  return {
    users,
    streams
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchUsers,
    fetchChannelStatus
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)