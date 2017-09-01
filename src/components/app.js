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
    if (this.props.twitch)
      this.props.fetchChannelStatus(this.props.twitch.map(user => user._id))
  }

  render() {
    if (!this.props.twitch) {
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
            {this.props.twitch.map(this.renderTwitchChannel)}
          </ul>
        </div>
      </div>
    )
  }

  renderTwitchChannel(channel) {
    return (
      <li key={channel['display_name']}>
        <div className="row">
          <div className="image-container col-md-3">
            <img className="img-fluid center-block" src={channel['logo']} />
          </div>
          <div className="col-md-3">
            <h3 className="channel-name text-xs-center text-md-left">{channel['display_name']}</h3>
          </div>
          <div className="col-md-3">
            <p className="online-status pull-right">Online!</p>
          </div>
          <div className="details col-md-3">
            <a>Show Details</a>
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