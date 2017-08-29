import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchTwitch } from '../actions/TwitchActions'
import { FETCH_TWITCH_API } from '../actions/types'

class App extends Component {
  componentWillMount() {
    this.props.fetchTwitch()
  }

  render() {
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
    fetchTwitch
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)