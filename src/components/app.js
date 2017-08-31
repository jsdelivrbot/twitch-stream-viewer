import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FETCH_TWITCH_API } from '../actions/types'
import {
  fetchTwitch,
  fetchChannelStatus
} from '../actions/TwitchActions'

class App extends Component {
  componentDidMount() {
    this.props.fetchTwitch()
  }

  componentDidUpdate() {
    if (this.props.twitch) {
      const userIds = this.props.twitch.map(user => user._id)
      this.props.fetchChannelStatus(userIds)
    }
  }

  render() {
    if (!this.props.twitch) {
      return (
        <div classNAme="row">
          <div className="col-xs-12 text-xs-center">
            <i className="fa fa-spinner fa-spin fa-4x" aria-hidden="true" />
          </div>
        </div>
      )
    }

    return (
      <div>
        <ul className="twitch_list">
          {this.props.twitch.map(this.renderTwitchChannel)}
        </ul>
      </div>
    )
  }

  renderTwitchChannel(channel) {
    return (
      <li key={channel['display_name']}>
        <div className="row">
          <div className="image-container col-md-4 col-md-offset-2">
            <img className="img-fluid center-block" src={channel['logo']} />
          </div>
          <div className="col-md-4">
            <h3 className="text-xs-center text-md-left">{channel['display_name']}</h3>
            <p className="text-xs-center text-md-left">{channel['bio']}</p>
          </div>
        </div>
      </li>
    )
  }
}

const mapStateToProps = ({ twitch }) => {
  return { twitch }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchTwitch,
    fetchChannelStatus
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)